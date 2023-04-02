<?php
require 'ConnectDataBase.php';
unset($array);
$sql = "SELECT TENSP ,GIATIEN FROM sanpham  ";
$result = $conn->query($sql);
if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {
        $array[] = $row;
    }

} else {
    echo "0 results";
}

$conn->close();

?>
<script>
    var arr = <?php echo json_encode($array); ?>;
    console.log(arr)

   try {
    while (length <= arr.length - 1) {
      
      for (i = 0; i < 4; i++, length++) {
          if (length > arr.length - 1) {
              break;
          }
          let newElement = document.createElement('film-component');
           newElement.classList = `film-component`
           newElement.classList = `film-component-showing`
           newElement.setAttribute("src", 'Asset/ori.webp');
           newElement.setAttribute("title", arr[length].TENSP)
           newElement.setAttribute("type", arr[length].GIATIEN)
           document.getElementById("flim-showing-item").appendChild(newElement);   

      }
  }
    
   } catch (error) {
    while (length <= arr.length - 1) {
      for (i = 0; i < arr.length; i++, length++) {
          if (length > arr.length - 1) {
              break;
          }
          let newElement = document.createElement('film-component');
           newElement.classList = `film-component`
           newElement.classList = `film-component-showing`
           newElement.setAttribute("src", 'Asset/ori.webp');
           newElement.setAttribute("title", arr[i].TENSP)
           newElement.setAttribute("type", arr[i].GIATIEN)
           document.getElementById("flim-showing-item").appendChild(newElement);   

      }
  }
   }
    
 
  
</script>