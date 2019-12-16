<?php 

$handle = fopen('pass.txt','r+');
$file_password= fgets($handle);
chop($file_password);
fclose($handle);
$handle = fopen('login.txt','r+');
$file_login = fgets($handle);
chop($file_login);
fclose($handle);
$login = "Не известно";
$password = "Не известно";
if (isset($_POST['login'])) $login = $_POST['login'];
if (isset($_POST['password'])) $password = $_POST['password'];
chop($login);
chop($password);
if(strcmp ( $file_password , $password )==0)
{

	if (strcmp ( $file_login , $login )==0) 
	{
		echo "Вы вошли";
	}
}
else
{
echo "Неправильный логин или пароль";
echo "$file_login  $file_password";
echo "$login $password";
}
?>