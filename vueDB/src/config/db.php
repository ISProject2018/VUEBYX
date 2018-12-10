<?php
    class db{
        private $host = "localhost";
        private $user = "root";
        private $pass = "";
        private $db = "angular_store";

        public function connect(){
            $mysql_connect_str = "mysql:host=$this->host;dbname=$this->db";
            $dbConnect = new PDO($mysql_connect_str, $this->user, $this->pass);
            $dbConnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $dbConnect;
        }
    }
