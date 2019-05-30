angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos','Clients', function($scope, $http, Todos,Clients) {
		$scope.formData = {};
		$scope.formData1 = {};
		$scope.loading = true;
		$scope.input = {};
		$scope.FLAG=1;
		$scope.clients={};
		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});
		Clients.get()
			.success(function(data) {
				$scope.clients = data;
				$scope.loading = false;
			});	

			//自动加入两条数据到client表格中
			$scope.formData.client_id="1127125637";
			$scope.formData.password="123456";
			$scope.formData.client_name="Jack";
			$scope.formData.interest_rate=0.030;
			$scope.formData.interest=300;
			$scope.formData. balance=20000;

		Clients.create($scope.formData)

			// if successful creation, call our get function to get all the new todos
			.success(function(data) {
				$scope.loading = false;
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.clients = data; // assign our new list of todos
			});

			$scope.formData1.client_id="1127125638";
			$scope.formData1.password="123456";
			$scope.formData1.client_name="Nancy";
			$scope.formData1.interest_rate=0.028;
			$scope.formData1.interest=500;
			$scope.formData1. balance=30000;

		Clients.create($scope.formData1)

			// if successful creation, call our get function to get all the new todos
			.success(function(data) {
				$scope.loading = false;
				$scope.formData1 = {}; // clear the form so our user is ready to enter another
				$scope.clients = data; // assign our new list of todos
			});


		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});





			}


		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};
		//点击登录键后调用该函数进行验证和跳转
		$scope.check = function(Input) {
			$scope.FLAG=2;
			var find=false;
			Clients.get()
			.success(function(data) {
				$scope.clients = data;
				$scope.loading = false;
			});	
			$scope.FLAG=3;
			for(var i=0;i<clients.length;i++){
				console.log("进入1")
				if(Input.client_id==clients[i].client_id){
					$scope.FLAG=4;
					console.log("进入2")

					if(Input.password==clients[i].password){
						window.location.href='index_2.html';
						console.log("进入3")

						find=true;
						$scope.FLAG=5;
					}
				}

			}
			$scope.FLAG=6;
			if(find==false){
				//给出警告
			}
		};

	}]);

	
