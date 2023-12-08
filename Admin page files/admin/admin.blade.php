<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/styles.css') }}">
        <style>@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');</style>
        <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet"  type='text/css'>
        <title>Admin Panel</title>
</head>
<body>
<div class="container">
  <div class="table-container">
  <form action="{{ route('users.deleteSelected') }}" method="POST"> <!--Use delete method in usercontroller-->
    @csrf
    @method('DELETE')
    <table class="styled-table">
        <!--Table of all information from table-->
        <br>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Delete?</th>
        </tr>
        @foreach($users as $user)
        <tr>
            <td>{{ $user->id }}</td>
            <td>{{ $user->name }}</td>
            <td>{{ $user->password }}</td>
            <td>{{ $user->email }}</td>
            <!--Checkbox at the last column-->
            <td><input type="checkbox" name="selectedUsers[]" value="{{ $user->id }}"></td>
        </tr>
        @endforeach
    </table>
    <div class="delete-container">
        <br><button type="submit" class="delete-btn">Delete Selected Customers</button>
    </div>
  </form>
  </div>
  <div class="form-container">
    <!--Add customer form - enter customer data-->
    <p>Add customer</p>
  <form method="POST" action="{{ route('users.store') }}" class="styled-form"> <!--Use store method in usercontroller-->
        @csrf 
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required><br><br>
        
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required><br><br>
        
        <button type="submit" class="submit-btn">Add Customer</button>
    </form>

    <div>
    <p>Update Customer Information</p>
    <!--Update customer data form - enter ID to be updated and information-->
    <form action="{{ route('users.update') }}" method="POST"> <!--Use update function in usercontroller-->
        @csrf
        @method('PUT')

        <label for="user_id">User ID:</label>
        <input type="text" name="user_id" required><br><br>

        <label for="name">Name:</label>
        <input type="text" name="name" required><br><br>

        <label for="password">Password:</label>
        <input type="password" name="password" required><br><br>

        <label for="email">Email:</label>
        <input type="email" name="email" required><br><br>

        <button type="submit" class="update-btn">Update Information</button>
    </form>
</div>

  </div>
</div>
    <div class="footer">
                <p>Follow Us!</p>
                <div class="socials">
                    <a class="socials-button" href="https://www.instagram.com"><i class="fa fa-brands fa fa-instagram" style="color: #D62976;"></i></a>
                    <a class="socials-button" href="https://www.linkedin.com/"><i class="fa fa-brands fa fa-linkedin" style="color: #0A66C2;"></i></a>
                    <a class="socials-button" href="https://twitter.com/"><i class="fa fa-brands fa fa-twitter" style="color: #00ACEE;"></i></a>
                    <a class="socials-button" href="https://www.youtube.com/"><i class="fa fa-brands fa fa-youtube" style="color: #FF0000;"></i></a>
                </div>
                <p>Made With &#x1FA75; By Team 36</p>
    </div>
</body>
</html>
