# web-automation-assessment Finexus
Framework: Playwright + TypeScript  
Scenario automated: Login to Practice Software Testing and verify user name.

### Run tests
```bash
npm install
npx playwright install
npm test
npm run report

Note on authentication: The assessment site shows an interactive bot-protection (CAPTCHA/verify-you-are-human) that blocks automated flows in headless/cloud environments
Note on API: 
- tests/api-login.spec.ts   & api-create-account.spec.ts     // login API tests [POST]
- tests/api-products.spec.ts    // products list API tests [GET]
- tests/api-delete-account.spec.ts // delete account test [DELETE]

