/*
 GridFadeSlider v3
 Pixel-perfect grid transitions using actual image slicing.
*/

class GridFadeSlider {
    constructor(options = {}) {
        this.container = typeof options.container === "string"
            ? document.querySelector(options.container)
            : options.container;

        if (!this.container) throw new Error("Container not found");

        this.images = options.images || [];
        this.rows = options.rows || 8;
        this.cols = options.cols || 12;
        this.interval = options.interval || 4000;
        this.duration = options.duration || 1000;

        this.current = 0;

        this.setup();
    }

    setup() {
        this.container.style.position = "relative";
        this.container.style.overflow = "hidden";

        this.base = document.createElement("div");
        this.base.style.position = "absolute";
        this.base.style.inset = "0";
        this.base.style.backgroundImage = `url("${this.images[0]}")`;
        this.base.style.backgroundSize = "cover";
        this.base.style.backgroundPosition = "center";

        this.overlay = document.createElement("div");
        this.overlay.style.position = "absolute";
        this.overlay.style.inset = "0";

        this.container.append(this.base, this.overlay);

        if (this.images.length > 1) {
            this.timer = setInterval(() => this.next(), this.interval);
        }
    }

    next() {
        const nextIndex = (this.current + 1) % this.images.length;

        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
            this.renderSlices(img, nextIndex);
        };

        img.src = this.images[nextIndex];
    }

    renderSlices(img, nextIndex) {
        this.overlay.innerHTML = "";

        const w = this.container.clientWidth;
        const h = this.container.clientHeight;

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;

        const ctx = canvas.getContext("2d");

        const scale = Math.max(w / img.width, h / img.height);
        const drawW = img.width * scale;
        const drawH = img.height * scale;

        const offsetX = (w - drawW) / 2;
        const offsetY = (h - drawH) / 2;

        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);

        const tileW = Math.ceil(w / this.cols);
        const tileH = Math.ceil(h / this.rows);

        const tiles = [];

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {

                const sx = c * tileW;
                const sy = r * tileH;

                const sw = Math.min(tileW, w - sx);
                const sh = Math.min(tileH, h - sy);

                const pieceCanvas = document.createElement("canvas");
                pieceCanvas.width = sw;
                pieceCanvas.height = sh;

                const pctx = pieceCanvas.getContext("2d");

                pctx.drawImage(
                    canvas,
                    sx, sy, sw, sh,
                    0, 0, sw, sh
                );

                const tile = document.createElement("div");
                tile.style.position = "absolute";
                tile.style.left = sx + "px";
                tile.style.top = sy + "px";
                tile.style.width = sw + "px";
                tile.style.height = sh + "px";
                tile.style.opacity = "0";
                tile.style.transition =
                    `opacity ${this.duration}ms ease`;

                const tileImg = document.createElement("img");
                tileImg.src = pieceCanvas.toDataURL("image/png");
                tileImg.style.width = "100%";
                tileImg.style.height = "100%";
                tileImg.draggable = false;

                tile.appendChild(tileImg);
                this.overlay.appendChild(tile);

                tiles.push(tile);
            }
        }

        tiles.sort(() => Math.random() - 0.5);

        tiles.forEach((tile, i) => {
            setTimeout(() => {
                tile.style.opacity = "1";
            }, i * 12);
        });

        const totalDelay = this.duration + (tiles.length * 12);

        setTimeout(() => {

            // Create a preload image
            const preload = new Image();

            preload.onload = () => {

                // Update base layer only after image is fully loaded
                this.base.style.backgroundImage =
                    `url("${this.images[nextIndex]}")`;

                // Wait for browser to paint the new background
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {

                        // Remove overlay AFTER the new image is visible
                        this.overlay.innerHTML = "";
                        this.current = nextIndex;

                    });
                });
            };

            preload.src = this.images[nextIndex];

        }, totalDelay);
    }

    destroy() {
        clearInterval(this.timer);
    }
}

window.GridFadeSlider = GridFadeSlider;