<?php

// Имитация серверной части

$deploy_id = (int)$_POST['deploy_id'];

$response = array(
    'status' => false,
);

if ($deploy_id == 1)
{
    $response['status'] = true;

    $response['tasks'] = array(
        array(
            'number' => 'ATGSM-7355',
            'title' => '',
            'description' => '',
            'performer' => '',
            'type' => '',
            'priority' => '',
            'product_version' => '',
            'status' => ''
        ),
    );
}

if ($deploy_id == 2)
{
    $response['status'] = true;
}

if ($deploy_id == 3)
{
    $response['status'] = true;
}


echo json_encode($response);
