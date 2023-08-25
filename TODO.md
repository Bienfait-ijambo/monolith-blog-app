### Cases

# 1st createUser

const userInput={
	email:''
	password:''
}

message=> Enter email and password !


const userInput={
	email:'email@gmail.com'
	password:'09029'
}

Email: 

- check valid email
- check invalid email
- email length

Password

- password : 6 and 8 chacters
- check hash

then return ---------------------------------------->user input email[email and hash]


# 2 nd Login


const userInput={
	email:''
	password:''
}
 
 message===>Enter email and password !
 

 # Delete user

 - provide valid id

 # update user 
 - const updateInput={
    email:`${userInput.email}
    userName:${userInput.userName}
    id:${userInput.id}
 }

 - required email and userName
 - validate email 
 - provide valid id



 # get users 


#### INTEGRATION TEST 

# register

- should create user
- should show Enter email and password !
- should throw error if email exist 
- should throw error if password is not valid(6 and 8 characters)
- should check valid email

# login
- should return email
- should enter email and password
- should check valid email
- should throw error if email or password invalid [email or password invalid]

# update user


# delete user

# get users