const keys = require('../../config/keys');

module.exports = survey => {
  return `<html>
            <body>
              <div style="text-align: center">
                <h3>I need your input</h3>
                <p>${survey.body}</p>
                <div>
                  <a href="${keys.redirectDomain}/api/survey/thanks">Yes</a>
                </div>
                  <a href="${keys.redirectDomain}/api/survey/thanks">No</a>
                </div>
              </div>
            </div>
          </body>
        </html>`;
};
