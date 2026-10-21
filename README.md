# ReSkill

Explore alternatives to layoffs through internal mobility and practical AI training.

**Live demo:** https://workshift-transition-lab.suhova-olga.chatgpt.site/

## Run locally

Requires Node.js 18 or newer. No dependencies or API key are needed for the current prototype.

```sh
npm start
```

Open http://localhost:3000. Set `PORT` to use another port.

```sh
npm test
```

## What works

* Match all employees in a selected department to funded demo vacancies.
* Model a department closure and exclude its own vacancies.
* Compare candidates when several people compete for one place.
* Explain skill gaps, training estimates and unallocated candidates.
* Explore two or three broader role directions beyond current openings, including potential benefits and reasons a role might not be justified.
* Compare one time transition costs against layoffs plus external hiring.
* Export a CSV with current placements, broader possibilities and assumptions.

### Quick demo

1. Scroll to **Who could move where?**
2. Choose an affected department and click **Match all**.
3. Enable **3 people competing for 1 opening** to see the capacity constraint example.
4. Open a person's **Broader possibilities** tab for future directions.

## Project structure

| Path | Purpose |
| --- | --- |
| `dist/index.html` | Application markup |
| `dist/style.css` | Responsive styles |
| `dist/model.js` | Fictional people, vacancies, role library, allocation and cost logic |
| `dist/app.js` | Filters, rendering, scenario controls and CSV export |
| `checks/` | Model, department, future role and competition checks |
| `scripts/serve.cjs` | Local static server |

## How matching works

Current openings require at least three of four listed skills and a modeled learning path for every missing skill. Allocation first maximizes the number of people placed within the training budget and time limits, then prefers greater skill overlap, shorter total training and lower training cost. Each person receives at most one place and each vacancy is allocated at most once.

Exact ties use names and vacancy IDs only for deterministic demo output. Real decisions need skills validation, employee interest and manager review.

Broader possibilities use a separate illustrative role library. They require at least two overlapping skills and a modeled training path. They do not consume vacancies, allocate training funds or inflate savings.

## Financial model and evidence

Savings are one time transition costs avoided, not annual payroll savings. The comparison includes assumed severance, external recruiting and onboarding, training and internal transfer administration. Ongoing pay, salary changes, training payroll, tax, legal fees and productivity gains are excluded.

* [SHRM, April 2022](https://www.shrm.org/topics-tools/news/talent-acquisition/real-costs-recruitment): historical average cost per hire of approximately $4,700.
* [BLS computer support specialists](https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm): wage context for user support roles.
* [BLS training and development specialists](https://www.bls.gov/ooh/business-and-financial/training-and-development-specialists.htm): wage context for training roles.

All employees, skill inventories, vacancies, training quotes and anticipated hiring plans are fictional. Assumptions are visible and editable in the app.

## AI integration status

**No live AI model is connected yet.** Current matches and explanations use deterministic JavaScript rules and a curated demo role library.

The next integration should add a server endpoint that calls a model to extract skills from user supplied experience, compare role requirements, and propose grounded future work. Keep provider keys on the server, validate structured model output, and let the deterministic code enforce vacancy limits and calculate costs. Do not put an API key in `dist/` or commit it to Git.

## Working as a team

Clone this repository, create a branch for your changes, run `npm test`, and open a pull request. This repository is public, so the team can read and clone it through its URL. Direct pushes require collaborator access from the repository owner. Other contributors can fork the repository and open pull requests.

The hosted demo is currently deployed separately through Sites. Pushing to GitHub does not automatically update that deployment.
