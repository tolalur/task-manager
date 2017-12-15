var app = new Vue({
    el: '#app',
    data: {
        version: [
            {id: 1, title: 'deploy 1'},
            {id: 2, title: 'deploy 2'},
            {id: 3, title: 'deploy 3'}
        ],
        activ_version: '',
        raw_tasks: [],
        tasks: [],
        status: ['Уточнение', 'Открыт', 'В работе', 'Выложить на тест', 'Тестируется', 'Готовые'],
        editable_task: {},
        sammary_task: {},
        new_task: {},
        temp: {},
        layout: 'layout',
        task_type: ['Задача', 'Ошибка'],
        priority: ['Низкий', 'Средний', 'Критический'],
        performers: ['Бородин Алексей', 'Бутаков Валентин', 'Власов Артем']

    },
    watch: {
        raw_tasks: function ()
        {
            if (!this.isEmptyObject(this.raw_tasks))
            {
                var sort_tasks = {},
                    _status = this.status;

                this.raw_tasks.forEach(function (item)
                {
                    if (!(item.performer in sort_tasks))
                    {
                        sort_tasks[item.performer] = {};
                        _status.forEach(function (status)
                        {
                            sort_tasks[item.performer][status] = [];
                        });
                    }
                });

                for (key in sort_tasks)
                {
                    this.raw_tasks.forEach(function (item, i)
                    {
                        if (item.performer == key)
                        {
                            item['id'] = i;
                            sort_tasks[key][item.status] == undefined ? sort_tasks[key][item.status] = [item] : sort_tasks[key][item.status].push(item);
                        }
                    });
                }
                this.tasks = sort_tasks;
            }
            else
            {
                this.tasks = [];
            }
        }
    },
    methods: {
        onEnd: function ()
        {
            var _this = this;
            var _raw_tasks = [];
            for (var performer in this.tasks)
            {
                for (var status in this.tasks[performer])
                {
                    this.tasks[performer][status].forEach(function (item)
                    {
                        if (!_this.isEmptyObject(item))
                        {
                            item.status !== status ? item.status = status : '';
                            item.performer !== performer ? item.performer = performer : '';
                            _this.raw_tasks.push(item);
                            _raw_tasks.push(item);
                        }
                    });
                }
            }
            this.raw_tasks = _raw_tasks;
        },
        get_tasks: function (deploy_id)
        {
            this.activ_version = deploy_id;
            var _this = this;

            $.ajax({
                type: 'POST',
                url: 'give_back_data.php',
                data: {deploy_id: deploy_id},
                dataType: 'json',
                success: function (response)
                {
                    if (response.status)
                    {
                        _this.raw_tasks = response.tasks;
                    }
                    else
                    {
                        _this.raw_tasks = [];
                    }
                }
            });
        },
        show_summary: function (id)
        {
            this.sammary_task = this.raw_tasks[id];
            this.sammary_task['id'] = id;
            this.layout = 'summary';
        },
        add_task: function ()
        {
            this.new_task.number = 'ATGSM-' + Math.floor(Math.random() * (8000 - 1000)) + 1000;
            this.raw_tasks.push(this.new_task);
            $("#modal_add").modal('hide');
            this.new_task = {};
        },
        edit_task: function (id)
        {
            this.layout = 'main';
            this.editable_task = this.raw_tasks[id];
            this.editable_task['id'] = id;
            $("#modal_edit").modal('show');
        },
        isEmptyObject: function (obj)
        {
            for (var key in obj)
            {
                return false;
            }
            return true;
        }
    }
});
