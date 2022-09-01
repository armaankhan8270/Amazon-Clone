import React from 'react'
import { auth } from '../firebase-config';
import { useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

const Signup = () => {
    const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
          alert(error.message)
        }
      };
    return (
        <div>
          <div className='flex grid-cols-1 justify-center bg-white shadow-xl'>
<div className=' '>
  
   <img className='ml-20 mt-2' width={'100px'} src="data:image/png;base64,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" alt="a" />
<div className='bg-white mt-[14px] mb-[14px] mr-[18px] ml-[18px]  w-[348px] h-[559px] pl-[26px] pr-[26px] pb-[20px] pt-[20px] border-2 border-gray-200 mt-'>
<h1 className='text-[28px] h-[37px] mb-[4px] '>Create Accout</h1>
<p className='text-[13px] font-bold '>your name</p>
<input placeholder='first and last name' className=' mb-3 p-2 border-2 text-[13px] border-gray-300 rounded border-gray-300 pt-[3px] pb-[3px] pr-[7px] w-[312px] h-[31px]' type="text" name="" id="" />
<p className='text-[13px] font-bold sm'>Mobile number (optional)</p>
<div className='grid grid-cols-2'>
<select className='bg-[#e7e9ec] rounded text-[13px] w-[54%] h-[32px]' name="countryCode" id="" >
	<optgroup label="Other countries">
		<option className='' data-countryCode="DZ" value="213"> IN + 91</option>
		<option data-countryCode="AD" value="376">Andorra (+376)</option>
		<option data-countryCode="AO" value="244">Angola (+244)</option>
		<option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
		<option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
		<option data-countryCode="AR" value="54">Argentina (+54)</option>
		<option data-countryCode="AM" value="374">Armenia (+374)</option>
		<option data-countryCode="AW" value="297">Aruba (+297)</option>
		<option data-countryCode="AU" value="61">Australia (+61)</option>
		<option data-countryCode="AT" value="43">Austria (+43)</option>
		<option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
		<option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
		<option data-countryCode="BH" value="973">Bahrain (+973)</option>
		<option data-countryCode="BD" value="880">Bangladesh (+880)</option>
		<option data-countryCode="BB" value="1246">Barbados (+1246)</option>
		<option data-countryCode="BY" value="375">Belarus (+375)</option>
		<option data-countryCode="BE" value="32">Belgium (+32)</option>
		<option data-countryCode="BZ" value="501">Belize (+501)</option>
		<option data-countryCode="BJ" value="229">Benin (+229)</option>
		<option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
		<option data-countryCode="BT" value="975">Bhutan (+975)</option>
		<option data-countryCode="BO" value="591">Bolivia (+591)</option>
		<option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
		<option data-countryCode="BW" value="267">Botswana (+267)</option>
		<option data-countryCode="BR" value="55">Brazil (+55)</option>
		<option data-countryCode="BN" value="673">Brunei (+673)</option>
		<option data-countryCode="BG" value="359">Bulgaria (+359)</option>
		<option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
		<option data-countryCode="BI" value="257">Burundi (+257)</option>
		<option data-countryCode="KH" value="855">Cambodia (+855)</option>
		<option data-countryCode="CM" value="237">Cameroon (+237)</option>
		<option data-countryCode="CA" value="1">Canada (+1)</option>
		<option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
		<option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
		<option data-countryCode="CF" value="236">Central African Republic (+236)</option>
		<option data-countryCode="CL" value="56">Chile (+56)</option>
		<option data-countryCode="CN" value="86">China (+86)</option>
		<option data-countryCode="CO" value="57">Colombia (+57)</option>
		<option data-countryCode="KM" value="269">Comoros (+269)</option>
		<option data-countryCode="CG" value="242">Congo (+242)</option>
		<option data-countryCode="CK" value="682">Cook Islands (+682)</option>
		<option data-countryCode="CR" value="506">Costa Rica (+506)</option>
		<option data-countryCode="HR" value="385">Croatia (+385)</option>
		<option data-countryCode="CU" value="53">Cuba (+53)</option>
		<option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
		<option data-countryCode="CY" value="357">Cyprus South (+357)</option>
		<option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
		<option data-countryCode="DK" value="45">Denmark (+45)</option>
		<option data-countryCode="DJ" value="253">Djibouti (+253)</option>
		<option data-countryCode="DM" value="1809">Dominica (+1809)</option>
		<option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
		<option data-countryCode="EC" value="593">Ecuador (+593)</option>
		<option data-countryCode="EG" value="20">Egypt (+20)</option>
		<option data-countryCode="SV" value="503">El Salvador (+503)</option>
		<option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
		<option data-countryCode="ER" value="291">Eritrea (+291)</option>
		<option data-countryCode="EE" value="372">Estonia (+372)</option>
		<option data-countryCode="ET" value="251">Ethiopia (+251)</option>
		<option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
		<option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
		<option data-countryCode="FJ" value="679">Fiji (+679)</option>
		<option data-countryCode="FI" value="358">Finland (+358)</option>
		<option data-countryCode="FR" value="33">France (+33)</option>
		<option data-countryCode="GF" value="594">French Guiana (+594)</option>
		<option data-countryCode="PF" value="689">French Polynesia (+689)</option>
		<option data-countryCode="GA" value="241">Gabon (+241)</option>
		<option data-countryCode="GM" value="220">Gambia (+220)</option>
		<option data-countryCode="GE" value="7880">Georgia (+7880)</option>
		<option data-countryCode="DE" value="49">Germany (+49)</option>
		<option data-countryCode="GH" value="233">Ghana (+233)</option>
		<option data-countryCode="GI" value="350">Gibraltar (+350)</option>
		<option data-countryCode="GR" value="30">Greece (+30)</option>
		<option data-countryCode="GL" value="299">Greenland (+299)</option>
		<option data-countryCode="GD" value="1473">Grenada (+1473)</option>
		<option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
		<option data-countryCode="GU" value="671">Guam (+671)</option>
		<option data-countryCode="GT" value="502">Guatemala (+502)</option>
		<option data-countryCode="GN" value="224">Guinea (+224)</option>
		<option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
		<option data-countryCode="GY" value="592">Guyana (+592)</option>
		<option data-countryCode="HT" value="509">Haiti (+509)</option>
		<option data-countryCode="HN" value="504">Honduras (+504)</option>
		<option data-countryCode="HK" value="852">Hong Kong (+852)</option>
		<option data-countryCode="HU" value="36">Hungary (+36)</option>
		<option data-countryCode="IS" value="354">Iceland (+354)</option>
		<option data-countryCode="IN" value="91">India (+91)</option>
		<option data-countryCode="ID" value="62">Indonesia (+62)</option>
		<option data-countryCode="IR" value="98">Iran (+98)</option>
		<option data-countryCode="IQ" value="964">Iraq (+964)</option>
		<option data-countryCode="IE" value="353">Ireland (+353)</option>
		<option data-countryCode="IL" value="972">Israel (+972)</option>
		<option data-countryCode="IT" value="39">Italy (+39)</option>
		<option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
		<option data-countryCode="JP" value="81">Japan (+81)</option>
		<option data-countryCode="JO" value="962">Jordan (+962)</option>
		<option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
		<option data-countryCode="KE" value="254">Kenya (+254)</option>
		<option data-countryCode="KI" value="686">Kiribati (+686)</option>
		<option data-countryCode="KP" value="850">Korea North (+850)</option>
		<option data-countryCode="KR" value="82">Korea South (+82)</option>
		<option data-countryCode="KW" value="965">Kuwait (+965)</option>
		<option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
		<option data-countryCode="LA" value="856">Laos (+856)</option>
		<option data-countryCode="LV" value="371">Latvia (+371)</option>
		<option data-countryCode="LB" value="961">Lebanon (+961)</option>
		<option data-countryCode="LS" value="266">Lesotho (+266)</option>
		<option data-countryCode="LR" value="231">Liberia (+231)</option>
		<option data-countryCode="LY" value="218">Libya (+218)</option>
		<option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
		<option data-countryCode="LT" value="370">Lithuania (+370)</option>
		<option data-countryCode="LU" value="352">Luxembourg (+352)</option>
		<option data-countryCode="MO" value="853">Macao (+853)</option>
		<option data-countryCode="MK" value="389">Macedonia (+389)</option>
		<option data-countryCode="MG" value="261">Madagascar (+261)</option>
		<option data-countryCode="MW" value="265">Malawi (+265)</option>
		<option data-countryCode="MY" value="60">Malaysia (+60)</option>
		<option data-countryCode="MV" value="960">Maldives (+960)</option>
		<option data-countryCode="ML" value="223">Mali (+223)</option>
		<option data-countryCode="MT" value="356">Malta (+356)</option>
		<option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
		<option data-countryCode="MQ" value="596">Martinique (+596)</option>
		<option data-countryCode="MR" value="222">Mauritania (+222)</option>
		<option data-countryCode="YT" value="269">Mayotte (+269)</option>
		<option data-countryCode="MX" value="52">Mexico (+52)</option>
		<option data-countryCode="FM" value="691">Micronesia (+691)</option>
		<option data-countryCode="MD" value="373">Moldova (+373)</option>
		<option data-countryCode="MC" value="377">Monaco (+377)</option>
		<option data-countryCode="MN" value="976">Mongolia (+976)</option>
		<option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
		<option data-countryCode="MA" value="212">Morocco (+212)</option>
		<option data-countryCode="MZ" value="258">Mozambique (+258)</option>
		<option data-countryCode="MN" value="95">Myanmar (+95)</option>
		<option data-countryCode="NA" value="264">Namibia (+264)</option>
		<option data-countryCode="NR" value="674">Nauru (+674)</option>
		<option data-countryCode="NP" value="977">Nepal (+977)</option>
		<option data-countryCode="NL" value="31">Netherlands (+31)</option>
		<option data-countryCode="NC" value="687">New Caledonia (+687)</option>
		<option data-countryCode="NZ" value="64">New Zealand (+64)</option>
		<option data-countryCode="NI" value="505">Nicaragua (+505)</option>
		<option data-countryCode="NE" value="227">Niger (+227)</option>
		<option data-countryCode="NG" value="234">Nigeria (+234)</option>
		<option data-countryCode="NU" value="683">Niue (+683)</option>
		<option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
		<option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
		<option data-countryCode="NO" value="47">Norway (+47)</option>
		<option data-countryCode="OM" value="968">Oman (+968)</option>
		<option data-countryCode="PW" value="680">Palau (+680)</option>
		<option data-countryCode="PA" value="507">Panama (+507)</option>
		<option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
		<option data-countryCode="PY" value="595">Paraguay (+595)</option>
		<option data-countryCode="PE" value="51">Peru (+51)</option>
		<option data-countryCode="PH" value="63">Philippines (+63)</option>
		<option data-countryCode="PL" value="48">Poland (+48)</option>
		<option data-countryCode="PT" value="351">Portugal (+351)</option>
		<option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
		<option data-countryCode="QA" value="974">Qatar (+974)</option>
		<option data-countryCode="RE" value="262">Reunion (+262)</option>
		<option data-countryCode="RO" value="40">Romania (+40)</option>
		<option data-countryCode="RU" value="7">Russia (+7)</option>
		<option data-countryCode="RW" value="250">Rwanda (+250)</option>
		<option data-countryCode="SM" value="378">San Marino (+378)</option>
		<option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
		<option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
		<option data-countryCode="SN" value="221">Senegal (+221)</option>
		<option data-countryCode="CS" value="381">Serbia (+381)</option>
		<option data-countryCode="SC" value="248">Seychelles (+248)</option>
		<option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
		<option data-countryCode="SG" value="65">Singapore (+65)</option>
		<option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
		<option data-countryCode="SI" value="386">Slovenia (+386)</option>
		<option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
		<option data-countryCode="SO" value="252">Somalia (+252)</option>
		<option data-countryCode="ZA" value="27">South Africa (+27)</option>
		<option data-countryCode="ES" value="34">Spain (+34)</option>
		<option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
		<option data-countryCode="SH" value="290">St. Helena (+290)</option>
		<option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
		<option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
		<option data-countryCode="SD" value="249">Sudan (+249)</option>
		<option data-countryCode="SR" value="597">Suriname (+597)</option>
		<option data-countryCode="SZ" value="268">Swaziland (+268)</option>
		<option data-countryCode="SE" value="46">Sweden (+46)</option>
		<option data-countryCode="CH" value="41">Switzerland (+41)</option>
		<option data-countryCode="SI" value="963">Syria (+963)</option>
		<option data-countryCode="TW" value="886">Taiwan (+886)</option>
		<option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
		<option data-countryCode="TH" value="66">Thailand (+66)</option>
		<option data-countryCode="TG" value="228">Togo (+228)</option>
		<option data-countryCode="TO" value="676">Tonga (+676)</option>
		<option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
		<option data-countryCode="TN" value="216">Tunisia (+216)</option>
		<option data-countryCode="TR" value="90">Turkey (+90)</option>
		<option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
		<option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
		<option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
		<option data-countryCode="TV" value="688">Tuvalu (+688)</option>
		<option data-countryCode="UG" value="256">Uganda (+256)</option>
		 <option data-countryCode="GB" value="44">UK (+44)</option> 
		<option data-countryCode="UA" value="380">Ukraine (+380)</option>
		<option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
		<option data-countryCode="UY" value="598">Uruguay (+598)</option>
		 <option data-countryCode="US" value="1">USA (+1)</option> 
		<option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
		<option data-countryCode="VU" value="678">Vanuatu (+678)</option>
		<option data-countryCode="VA" value="379">Vatican City (+379)</option>
		<option data-countryCode="VE" value="58">Venezuela (+58)</option>
		<option data-countryCode="VN" value="84">Vietnam (+84)</option>
		<option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
		<option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
		<option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
		<option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
		<option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
		<option data-countryCode="ZM" value="260">Zambia (+260)</option>
		<option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
	</optgroup>
</select>
  
<input placeholder='Mobile number' className='text-[13px] p-2 border-2 text-[13px] border-gray-300 rounded mb-4 border-gray-300 rounded pt-[3px] pb-[3px] -ml-12  w-[230px] h-[31px]' type="text" name="" id="" />
</div>
 
  <p className='text-[13px] font-bold sm'>Email</p>
<input placeholder='first and last name' className=' p-2  mb-3 border-2 text-[13px] border-gray-300 rounded border-gray-300 pt-[3px] pb-[3px] pr-[7px] w-[312px] h-[31px]' type="text" name="" id="" />
  <p className='text-[13px] font-bold sm'>Password</p>
<input placeholder='at least 6 charachter' className=' p-2 border-2 text-[13px] border-gray-300 rounded border-gray-300 pt-[3px] pb-[3px] pr-[7px] w-[312px] h-[31px]' type="text" name="" id="" />
 <p className='text-[13px] font-bold'>
Passwords must be at least 6 characters.</p>
  <p className='text-[15px] pt-4'>We will send you a text to verify your phone.
Message and Data rates may apply.</p>
<button onClick={login} className='bg-[#f0c14b] text-[13px] mt-4 w-[294px] pr-[6px] pl-[6px] h-[31px] rounded shadow-xl'>Continue</button>

<p className='text-[13x] pt-8'>
Already have an account?<span className='text-blue-800'>Sign in</span></p>
<p className='text-[13px]'>Buying for work? <span className='text-blue-800'>Create a free business account</span> </p>
</div>

</div>

          </div>
             a<div className='flex gap-10 text-blue-500 text-[11px] justify-center  border-r-2 border-black'>
<p>Condition use</p>  
<p>Privacy </p>  
<p>Help</p>  
 </div>
 <h1 className='text-center text-[13px] pt-4 ' >
    © 1996-2022, Amazon.com, Inc. or its affiliates
    </h1>
        </div>
    )
}

export default Signup
