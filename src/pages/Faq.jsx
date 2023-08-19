import { render } from "@testing-library/react"

const Faq = () =>{
    return(
        <>
            <main class="main">
      <div class="site-breadcrumb">
        <div class="container wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay=".25s">
          <h2 class="breadcrumb-title">Faq's</h2>
          <ul class="breadcrumb-menu">
            <li>
              <a href="index-2.html">
                <i class="far fa-home"></i> Home </a>
            </li>
            <li class="active">Faq's</li>
          </ul>
        </div>
      </div>
      <div class="faq-area text-white py-120">
        <div class="container">
          	<div class="accordion" id="accordion1">
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading1">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How to start investing?</button>
				    </h2>
				    <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion1" >
				      <div class="accordion-body"> Just sign up and make your first deposit.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading2">
				      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
				        <span>
				          <i class="far fa-question"></i>
				        </span>What is the mechanism of earnings, and how can I get more profit?</button>
				    </h2>
				    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion1" >
				      <div class="accordion-body">You just need to choose the type of deposit and deposit funds. Then you can follow the growth of the deposit or withdraw funds at the right time. We also have a referral program.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>What is the main activity of Octane Exchange?</button>
				    </h2>
				    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body"> We are engaged in cryptocurrency trading. In other words, we buy cheaply, we sell expensively, we keep the difference for ourselves, paying interest to investors.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How confidential is my data?</button>
				    </h2>
				    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">Octane Exchange uses modern security protocols, respecting the complete anonymity of investors for third parties.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How can I make a deposit?</button>
				    </h2>
				    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">You can fund your account using BTC, LTC, ETH, BCH, DASH,Dogcoin, PerfectMoney and Payeer .</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How much money can you invest?</button>
				    </h2>
				    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">The minimum deposit amount is $20 and the maximum you can deposit at one time is $100,000 Per each deposit , Surely you can make deposit higher than $100,000 by several deposits.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>What are the risks?</button>
				    </h2>
				    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">The risk in trading is always present. But our team has long learned how to minimize any possibility of failure.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>What is the minimum and maximum amount for withdrawal?</button>
				    </h2>
				    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">The minimum amount for withdrawal is $2. There is no maximum limit for withdrawal.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How long does it take for my deposit to be added?</button>
				    </h2>
				    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">Your deposit is automatically added after 3 network confirmations for cryptocurrencies but for PM and payeer this be add as soon as you paid funds.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How do I request a withdrawal?</button>
				    </h2>
				    <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">You can request a withdrawal by clicking the Withdraw button in the member's area and entering the amount you want to withdraw.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>Are there any withdrawal fees?</button>
				    </h2>
				    <div id="collapse11" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">No, there are no fees for withdrawal.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How can I register a new account?</button>
				    </h2>
				    <div id="collapse12" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">To register a new account, simply click the Register New Account button or Sign Up link and fill out the required information.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How long does it take for my withdrawal to be sent?</button>
				    </h2>
				    <div id="collapse13" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">Your withdrawal is sent Instant after it is requested .</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>Can I withdraw my principal deposit?</button>
				    </h2>
				    <div id="collapse14" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">Yes, your principal deposit return in your account after your invested plan period end and you can reinvest or withdraw this.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How can I change my Payment address?</button>
				    </h2>
				    <div id="collapse15" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">You can change your payment withdrawal address by clicking the Settings button on the menu after logging in to your account. Enter your new payment address and save the changes.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How can I change my account e-mail?</button>
				    </h2>
				    <div id="collapse15" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">For security reasons, we do not allow users to change their e-mail after registration. If you would like to change your e-mail, please contact our support and we will change it for you.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How can I see who my upline is?</button>
				    </h2>
				    <div id="collapse16" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">You can see your upline by clicking on Referrals, and you will see the username of your upline. If there is no username there, it means you have no upline.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>Can I register multiple accounts from the same computer?</button>
				    </h2>
				    <div id="collapse17" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">Yes, you can register multiple accounts from the same computer or IP address, but they cannot be your referral.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>Can I withdraw funds before the end of the investment period?</button>
				    </h2>
				    <div id="collapse18" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">Unfortunately not. Your funds were used in the formation of a financial strategy, so their loss may affect the entire operation.</div>
				    </div>
				  </div>
				  <div class="accordion-item">
				    <h2 class="accordion-header" id="heading3">
				      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse3">
				        <span>
				          <i class="far fa-question"></i>
				        </span>How can I contact your support?</button>
				    </h2>
				    <div id="collapse19" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion1">
				      <div class="accordion-body">You can contact our support through clicking the Contact Us link. We offer support through Contact Form, and E-mail.</div>
				    </div>
				  </div>
				</div>
          
        </div>
      </div>
    </main>
        </>
    )
}

export default Faq;