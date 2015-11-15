<?php include "header.php"; ?>
<?php include "signup.php"; ?>
<?php include "login.php"; ?>


        <div class="container-fluid">
            <div class="welcome">
                <h1>Mapquiz</h1>
                <h3>Log in to explore the world</h3>
                <?php if(isset($_GET['no_match'])) {
                    ?><h5>New player? Sign up!</h5><?php
                }?>
            </div>

            <div class="row">
                <!-- ****************** BACK BUTTON ***************** -->
                <div class="col-xs-12 btnBack">
                    <button type="submit" name="backBtn" class="btn btnGrey btnSmall"><i class="fa fa-chevron-left"></i>BACK</button>
                </div>

                <!-- ************* LOGIN/SIGNUP BUTTONS ************** -->
                <div class="loginSignupButtons">
                    <div class="col-xs-offset-1 col-xs-10 col-sm-5 col-md-offset-2 col-md-3 col col-lg-offset-4 col-lg-2">
                        <button type="submit" name="loginBtn" class="btn btnGreen">LOG IN</button>
                    </div>

                    <div class="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-5 col-md-offset-2 col-md-3 col-lg-offset-0 col-lg-2">
                        <button type="submit" name="signupBtn" class="btn btnGrey">SIGN UP</button>
                    </div>  
                </div>

                <!-- ********************* FORM ********************* -->
                <div class="col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4 logInForm">
                    <form id="logInForm" method="post" action="login.php">
                        <div class="form-group">
                            <label class="sr-only" for="userNameLogIn">Please enter a username</label>
                            <input type="text" name="userNameLogIn" class="form-control inputs" id="userNameLogIn" placeholder="username" />
                        </div>

                        <div class="form-group passwordLogIn">
                            <label class="sr-only" for="passwordLogIn">Please enter a password</label>
                            <input type="password" name="passwordLogIn" class="form-control inputs" id="passwordLogIn" placeholder="password" />       
                        </div>
                        <button type="submit" name="loginBtn" class="btn btnGreen btnOk btnLogin">OK</button>
                    </form>
                </div> 

                <div class="col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4 signUpForm">
                    <form id="signUpForm" method="post" action="signup.php">
                        <div class="form-group userNameSignUp">
                            <label class="sr-only" for="userNameSignUp">Please enter a username</label>
                            <input type="text" name="userNameSignUp" class="form-control inputs" id="userNameSignUp" placeholder="username" aria-describedby="inputError2" />
                            <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                            <span id="inputError" class="sr-only">(error)</span>
                        </div>

                        <div class="form-group passwordSignUp">
                            <label class="sr-only" for="passwordSignUp">Please enter a password</label>
                            <input type="password" name="passwordSignUp" class="form-control inputs" id="passwordSignUp" placeholder="password" />       
                        </div>
                        <button type="submit" name="signupBtn" class="btn btnGreen btnOk btnSignup">OK</button>
                    </form>
                </div>  
            </div>
        </div>

<?php include "footer.php"; ?>