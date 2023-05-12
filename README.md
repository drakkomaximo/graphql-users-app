# graphql-users-app-manager
This is a React app consuming a free GraphQl API

<details>
<summary>Instalations:</summary>
<br>
  
## First Step:
Use the following command to restore node_modules
```
yarn
```

## Second Step:
Create an account in https://gorest.co.in/
![image](https://github.com/drakkomaximo/graphql-users-app/assets/57687342/6addf5e9-0bc0-408e-8a6c-5051e3c35441)

Select an option to login (in my case I prefer Github)
![image](https://github.com/drakkomaximo/graphql-users-app/assets/57687342/b19025df-f3d3-43dd-afec-c9994851b2da)

Select **YOUR TOKEN** and replace my token in the .env file because in the future I am going to remove that
![image](https://github.com/drakkomaximo/graphql-users-app/assets/57687342/20feacaf-9ef0-48f1-8e45-55c6b4c82a9f)

In the future replace .env.template --> .env, this is an example about environment variables
![image](https://github.com/drakkomaximo/graphql-users-app/assets/57687342/147da82f-d8bb-45c4-a1c9-3053f1bfce88)

## Third Step:
In your IDE or command console, use the following command to start the application in developer mode:
```
yarn dev
```

## Four Step:
Start testing the app
![image](https://github.com/drakkomaximo/graphql-users-app/assets/57687342/ffb0967b-20df-44ac-b477-38c5cdd52c6e)
</details>

<details>
<summary>How to use this app:</summary>
<br>
  
This app by default always render 10 users from API, you can create new users and watch 15 of them, after that the older user will be replaced by the new user to create.
  
## Create new user
In this part you can create a new user, using the following form.
![image](https://github.com/drakkomaximo/graphql-users-app/assets/57687342/2c5d8bc9-35ab-4efb-88be-44ea50882b2e)
In create mode, you cannot assign the same email to another user and you must fill in all fields
![image](https://github.com/drakkomaximo/graphql-users-app/assets/57687342/48d7d1c5-0702-4129-8860-31c5bf6c4f6e)

## Edit mode
In this part you can edit a previous user, you must select the **EDIT** button and replace the current information, using the following form
![image](https://github.com/drakkomaximo/graphql-users-app/assets/57687342/fed0c37a-dffa-4611-ae5e-2782738f6597)
In update mode, just change the specific fields and click the **UPDATE** button
![image](https://github.com/drakkomaximo/graphql-users-app/assets/57687342/0c412fb0-c7b2-43c4-a537-4eda10cf5402)

## Delete mode
In this part you can delete an old user, you must select the button **DELETE**
![image](https://github.com/drakkomaximo/graphql-users-app/assets/57687342/e09172a0-edf8-431c-9d71-7cec06c5bf44)
In delete mode this action is permanent and instant (think about that first)
![image](https://github.com/drakkomaximo/graphql-users-app/assets/57687342/99b323bb-9319-49ba-972f-02480965a5df)

</details>

You can test the app with this link: [Test app](https://react-graphql-user-manager.netlify.app/)


