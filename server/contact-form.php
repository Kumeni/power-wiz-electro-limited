<?php 

    require './db.php';
    require './db-operations.php';
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        /*if(isset($_POST["deleted"])){
            //handle deleting categories
            $deleted = $_POST["deleted"];
            $deleted = json_decode($deleted);
            foreach ($deleted as $index => $id) {
                $sql = "UPDATE sensor_categories SET deleted='1' WHERE id=$id";
                update($host, $user, $password, $database, $sql);
            }

            echo availableCategories($host, $user, $password, $database);
            die();
        }*/

        $username = $_POST["username"];
        $username = test_input($username);

        $email = $_POST["email"];
        $email = test_input($email);

        $subject = $_POST["subject"];
        $subject = test_input($subject);

        $message = $_POST["message"];
        $message = test_input($message);

        /*if(isset($_POST["id"])){
            //handle editing categories
            $id = $_POST["id"];
            $id = test_input($id);

            $sql = "UPDATE sensor_categories SET category='$category' WHERE id=$id";
            update($host, $user, $password, $database, $sql);

            echo availableCategories($host, $user, $password, $database);
            die();
        }*/

        /**
         * Creating a new event
         */

        $sql = "INSERT INTO messages(`username`, `email`, `subject`, `message`) VALUES('$username', '$email', '$subject', '$message')";
        create($host, $user, $password, $database, $sql);

        /**
         * Send email;
         */
        $data = [
            "data" => "Message received successfully"
        ];

        echo json_encode($data);
        die();
    } if($_SERVER["REQUEST_METHOD"] == "GET"){
        //echo availableCategories($host, $user, $password, $database);

        echo json_encode([]);
        die();
    }

    /**
     * Fetches the available sensor categories from the database and returns a json response;
     */
    /*function availableCategories($host, $user, $password, $database){
        $sql = "SELECT * FROM sensor_categories WHERE deleted='0'";
        $sensorCategories = find($host, $user, $password, $database, $sql);
        $newArray = [];
        foreach ($sensorCategories as $index => $sensorCategory) {
            # code...
            $newArray[$index] = $sensorCategory;
        }

        $sensorCategories = $newArray;
        return json_encode($sensorCategories);
    }*/

    /**
     * This function ensures we're not getting hacked, at least :))
     */
    function test_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);

        return $data;
    }
   
?>