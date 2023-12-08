<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    
    public function show()
    {
        $users = User::all(); //Fetch all data from database
        return view('admin\admin', compact('users')); //Pass data to view

    }

    public function store(Request $request)
    {
        // Validate incoming request data
        $validatedData = $request->validate([
            'name' => 'required', //Validation rules
            'password' => 'required',
            'email' => 'required|email|unique:users,email',
        ]);
        
        // Create a new user record in the database
        $users = User::create($validatedData);

        // Or redirect
        return redirect('/users')->with('success', 'User added successfully!');
    }


    public function deleteSelected(Request $request)
    {
        $selectedUsers = $request->input('selectedUsers');

        //if not empty then delete selected customers
        if (!empty($selectedUsers)) {
            DB::table('users')->whereIn('id', $selectedUsers)->delete();
            return redirect('/users')->with('success', 'Selected users deleted successfully!');
        } else {//nothing selected
            return redirect('/users')->with('error', 'No users selected for deletion!');
        }
    }

    public function update(Request $request)
    {
        // Validate incoming request data
        $validatedData = $request->validate([
            'user_id' => 'required|numeric', // Validation rules
            'name' => 'required',
            'password' => 'required',
            'email' => 'required|email',
        ]);

        // Retrieve the user data using the provided user ID
        $user = User::find($validatedData['user_id']);

        // Check if it exists
        if (!$user) {
            return redirect()->back()->with('error', 'User not found! Please enter a valid user ID.');
        }

        // Update the user's information
        $user->update([
            'name' => $validatedData['name'],
            'password' => $validatedData['password'],
            'email' => $validatedData['email'],
        ]);

        return redirect()->back()->with('success', 'User information updated successfully!');
    }
 

}
