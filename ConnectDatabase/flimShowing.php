
<?php
require 'ConnectDataBase.php';
unset($array);
$sql = "SELECT MANV, TENNV, GIOITINH FROM nhanvien";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            $array[] = $row;
        }
    
    } else {
        echo "0 results";
    }
    // var_dump($array);
    // echo count($array);
    $conn->close();

?>
<script>
    var arr = <?php echo json_encode($array); ?>;
    console.log(arr)
    for (i = 0; i < 5; i++) {
        let newElement = document.createElement('film-component');
      
        newElement.classList=`film-component`
       
        newElement.setAttribute("src",'Asset/ori.webp');
        newElement.setAttribute("title",arr[i].TENNV)
        document.getElementById("silde-container").appendChild(newElement);
    }
    // arr.length = 0 ;
</script>
