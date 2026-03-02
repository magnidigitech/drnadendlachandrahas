<?php
include 'db_config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $sql = "SELECT * FROM patients WHERE id = $id";
        $result = $conn->query($sql);
        echo json_encode($result->fetch_assoc());
    } else {
        $sql = "SELECT * FROM patients ORDER BY created_at DESC";
        $result = $conn->query($sql);
        $patients = [];
        while($row = $result->fetch_assoc()) {
            $patients[] = $row;
        }
        echo json_encode($patients);
    }
}

if ($method == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'];
    $age = $data['age'];
    $weeks = $data['weeks'];
    
    $sql = "INSERT INTO patients (name, age, weeks_pregnant) VALUES ('$name', $age, $weeks)";
    if ($conn->query($sql)) {
        echo json_encode(["status" => "success", "id" => $conn->insert_id]);
    } else {
        echo json_encode(["error" => $conn->error]);
    }
}

$conn->close();
?>
