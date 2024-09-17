<?php
// 初始化 20 個人的朋友關係
$peopleCount = 20;
$connections = array_fill(0, $peopleCount, array_fill(0, $peopleCount, false));

// 建立朋友關係的函式
function makeFriends($personA, $personB) {
    global $connections;
    
    // 檢查是否兩者是同一個人
    if ($personA == $personB) {
        return "一個人無法和自己成為朋友！";
    }
    
    // 建立朋友關係
    $connections[$personA][$personB] = true;
    $connections[$personB][$personA] = true;
    return "成功建立 {$personA} 和 {$personB} 的朋友關係!";
}

// 檢查是否有提交表單
$message = "";
if (isset($_GET['action']) && $_GET['action'] == 'make') {
    $personA = intval($_GET['personA']);
    $personB = intval($_GET['personB']);
    $message = makeFriends($personA, $personB);
}
?>

<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <title>建立朋友關係</title>
</head>
<body>
    <form action="connectivity.php" method="GET">
        <input type="number" name="personA" value="0" min="0" max="19"> is a friend of
        <input type="number" name="personB" value="4" min="0" max="19">
        <input type="hidden" name="action" value="make">
        <button type="submit">送出查詢</button>
    </form>

    <!-- 顯示處理結果 -->
    <p><?php echo $message; ?></p>
</body>
</html>