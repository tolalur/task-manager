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
            'title' => 'Использование переменных в настройках СЕО',
            'description' => 'Описание задачи ATGSM-7355',
            'performer' => 'Бородин Алексей',
            'type' => 'Задача',
            'priority' => 'Низкий',
            'product_version' => 'deploy 1',
            'status' => 'Уточнение'
        ),
        array(
            'number' => 'ATGSM-6886',
            'title' => 'Починить поиск по бренду',
            'description' => 'Описание задачи ATGSM-6886',
            'performer' => 'Бутаков Валентин',
            'type' => 'Ошибка',
            'priority' => 'Средний',
            'product_version' => 'deploy 1',
            'status' => 'Открыт'
        ),
        array(
            'number' => 'ATGSM-7192',
            'title' => 'Создание формы регистрации',
            'description' => 'Описание задачи ATGSM-7192',
            'performer' => 'Власов Артем',
            'type' => 'Ошибка',
            'priority' => 'Критический',
            'product_version' => 'deploy 1',
            'status' => 'В работе'
        ),
        array(
            'number' => 'ATGSM-7355',
            'title' => 'Использование переменных в настройках СЕО',
            'description' => 'Описание задачи ATGSM-7355',
            'performer' => 'Бородин Алексей',
            'type' => 'Задача',
            'priority' => 'Низкий',
            'product_version' => 'deploy 1',
            'status' => 'Выложить на тест'
        ),
        array(
            'number' => 'ATGSM-6886',
            'title' => 'Починить поиск по бренду',
            'description' => 'Описание задачи ATGSM-6886',
            'performer' => 'Бутаков Валентин',
            'type' => 'Ошибка',
            'priority' => 'Средний',
            'product_version' => 'deploy 1',
            'status' => 'Тестируется'
        ),
        array(
            'number' => 'ATGSM-7192',
            'title' => 'Создание формы регистрации',
            'description' => 'Описание задачи ATGSM-7192',
            'performer' => 'Власов Артем',
            'type' => 'Ошибка',
            'priority' => 'Критический',
            'product_version' => 'deploy 1',
            'status' => 'Готовые'
        )
    );
}

if ($deploy_id == 2)
{
    $response['status'] = false;
}

if ($deploy_id == 3)
{
    $response['status'] = false;
}


echo json_encode($response);
