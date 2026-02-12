/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  let criteria = 0

  function passwordcontainsuppercase(password){
    for(let i=0; i<password.length; i++){
      if(((password.charCodeAt(i))<=90) && ((password.charCodeAt(i))>=65) ) return true
    }
    return false
  }

  function passwordcontainslowercase(password){
    for(let i=0; i<password.length; i++){
      if(((password.charCodeAt(i))<=122) && ((password.charCodeAt(i))>=97) ) return true
    }
    return false
  }

  function passwordcontainsnumber(password){
    for(let i=0; i<password.length; i++){
      if(((password.charCodeAt(i))<=57) && ((password.charCodeAt(i))>=48) ) return true
    }
    return false    
  }

  function passwordcontainssymbol(password){
    for(let i=0; i<password.length; i++){
      if((password.charAt(i)=='!') || (password.charAt(i)=='@') || (password.charAt(i)=='#') || (password.charAt(i)=='$') || (password.charAt(i)=='%') || (password.charAt(i)=='^') || (password.charAt(i)=='&') || (password.charAt(i)=='*') || (password.charAt(i)=='(') || (password.charAt(i)==')') || (password.charAt(i)=='_') || (password.charAt(i)=='-') || (password.charAt(i)=='+') || (password.charAt(i)=='=') || password.charAt(i)=='{' || (password.charAt(i)=='}') || (password.charAt(i)=='[') || (password.charAt(i)==']') || (password.charAt(i)=='|') || (password.charAt(i)==':') || (password.charAt(i)==';') || (password.charAt(i)==',') || (password.charAt(i)=='.') || (password.charAt(i)=='<') || (password.charAt(i)=='>')) 
        return true
    }
    return false
  }

  if((!(typeof password === 'string')) || (password.length === 0)) return "weak" //if the reverse the order of OR it will throw error, for null values it will just check password.length == 0 and since null doesn't contain any value it will throw erro
  if(password.length>= 8) criteria++
  if(passwordcontainsuppercase(password)=== true) criteria++
  if(passwordcontainslowercase(password)=== true) criteria++
  if(passwordcontainsnumber(password)=== true) criteria++
  if(passwordcontainssymbol(password)=== true) criteria++

  if(criteria<=1) return "weak"
  else if((criteria<=3) && (criteria>1)) return "medium"
  else if(criteria===4) return "strong"
  else if(criteria===5) return "very strong"
  else return "weak"
}
