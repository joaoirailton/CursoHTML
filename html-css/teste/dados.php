<?php
    $nome = addslaches($_POST['nome']);
    $email = addslaches($_POST['email']);
    $telefone = addslashes($_POST['telefone']);

    $para = "junioramos4991@gmail.com";
    $assunto = "coleta de dados - teste juninho";
    $corpo = "Nome: ".$nome."\n"."E-mail:".$email."\n"."Telefone:".$telefone;

    $cabeca = "From: junioramos4991@gmail.com"."\n"."reply-to: ".$email."\n".""

?>