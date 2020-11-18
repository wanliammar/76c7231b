<p align="center">
  <b>Commercetools Developer IT Coding Task</b>
</p>

> This is our Developer IT coding task which will be accessible to you for one week. After we will remove your access to the repository again. Please read through the instructions and get back to us in case of questions.

## Task

Implement a GitHub Action helping us to guide repository access in a structured way. Employees use this repository to open issues and by such request access to certain repositories. As the process all employees follow is:

1. Open an issue on GitHub on this repository (using the GitHub issue template)
2. The issue title must start with "Requesting access to <additional information>"
3. Users assign a label called "Repository Access"
4. Within the body of the issue employees list the following
   - What repository to gain access to
   - Reason why access is needed
   - What kind of access they require (read, write or admin)
   - If the access should be granted limited or unlimited

Given this information the GitHub Action should to the following:

Validate the required information and add an additional comment if the label "Repository Access" exists and any of the following requirements are not met
   - The issue title doesn't start with the expected message
   - The why, what and timespan questions are not answered

In this case the comment should be:

```txt
👋 Hi,

you seem to request access to a certain repository but the issue lacks information.
Please add the additional information missing:

1. What repository
2. Reason for access
2. Kind of access
3. Duration of access

Thanks,
your Developer IT Team
```

At the same time the GitHub Action should assign the label "Awaiting Input" to the issue.

If all validation passes the GitHub Action should comment on the issue with the following text:

```txt
👋 Hi,

thanks for requesting access to a repository.
We will process your request as soon as possible.

Please have a look @developer-it

Thanks,
your Developer IT Team
```

At the same time the GitHub Action should assign the label "Awaiting Approval" to the issue.

## How to go about this task

- Some necessary setup for a GitHub Action is provided please read up on GitHub Actions [here](https://docs.github.com/en/free-pro-team@latest/actions).
   - Feel free to enhance the setup with tools you prefer.
- If applicable highlight areas you want to emphasize (decisions, code or architecture).
- We recommend you spend no more than 8h on this task as we do not want to take up too much of your time. 
   - If you do not manage to finish on time, please do not worry and send us what you have anyway. 
   - We just want to see how you approach the problem.
   - Feel free to also provide reasoning and issues you encountered
- The code should be of a quality you consider ready for our team.
- The feature-set described above is minimal. If you happen to implement additional functionalities you can argue to be helpful to us you are free to implement them. Provide your reasoning.
- Please provide us with feedback about this task: what was unclear, where we can improve etc.

## What we will be looking at

- The structure of the code and setup
- The sustainability of the chosen technologies
- Styles and types of tests when present
- Documentation and maintainability

## Submitting a completed task

Just push your changes to `master` or a custom branch in one or incremental commits to the repository provided to you. Please do not fork the repository.

