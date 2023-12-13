import {useState} from "react";

function Login() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(`로그인 - 사용자명:${username}, 비밀번호:${password}`)
    };

    return (
        <div>
      <h2>로그인 페이지</h2>
      <div>
        <label>사용자명:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>비밀번호:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );

    
}

export default Login;

{/* <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign Up Form</title>
        <link rel="stylesheet" href="https://codepen.io/gymratpacks/pen/VKzBEp#0">
        <link href='https://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
      <div class="row">
    <div class="col-md-12">
      <form action="index.html" method="post">
        <h1> Sign Up </h1>
        
        <fieldset>
          
          <legend><span class="number">1</span> Your Basic Info</legend>
        
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name">
        
          <label for="email">Email:</label>
          <input type="email" id="mail" name="user_email">
       
          <label for="password">Password:</label>
          <input type="password" id="password"       name="user_password">
        
          <label>Age:</label>
          <input type="radio" id="under_13" value="under_13" name="user_age"><label for="under_13" class="light">Under 13</label><br>
          <input type="radio" id="over_13" value="over_13" name="user_age"><label for="over_13" class="light">Over 13</label>
          
        </fieldset>
        <fieldset>  
        
          <legend><span class="number">2</span> Your Profile</legend>
          
        
       
        
         </fieldset>
       
        <button type="submit">로그인</button>
        
       </form>
        </div>
      </div>
      
    </body>
</html> */}
