<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>UndyX | Space Lab Physics Practicals</title>
  <link rel="stylesheet" href=".idea\UnfyX.css" />
</head>
<body>
  <div class="app">
    <div class="space" aria-hidden="true">
      <div class="star-layer layer-a"></div>
      <div class="star-layer layer-b"></div>
      <div class="space-grid"></div>
      <div class="nebula n1"></div>
      <div class="nebula n2"></div>
      <div class="orbit-ring ring-a"></div>
      <div class="planet major"></div>
      <div class="planet minor"></div>
      <div class="meteor m1"></div>
      <div class="meteor m2"></div>
    </div>

    <header class="topbar">
      <button class="brand" data-view="home" aria-label="Open home view">
        <span class="brand-mark">UX</span>
        <span class="brand-name">Undy<span class="accent">X</span></span>
      </button>
      <nav class="nav" aria-label="Main navigation">
        <button class="nav-btn active" data-view="home">Home</button>
        <button class="nav-btn" data-view="pastpapers">Past Papers</button>
        <button class="nav-btn" data-view="practice">Simulation</button>
        <button class="nav-btn" data-view="progress">Progress</button>
        <button class="nav-btn" data-view="report">Report Issue</button>
      </nav>
      <button class="profile-btn" data-view="progress" aria-label="Open progress view">i</button>
    </header>

    <main class="container">
      <section class="view active" id="view-home">
        <div class="hero">
          <div class="hero-copy reveal">
            <p class="section-kicker">AS Level Practical Simulator</p>
            <h1>Undy<span class="accent">X</span></h1>
            <p class="hero-sub">
              Cambridge-style practicals in a space-lab simulator. Open a paper, tune the apparatus,
              and watch the table, mechanism, and graph update together.
            </p>
            <div class="console-actions">
              <button class="btn btn-blue" id="launchLatestBtn">Open Simulation Deck</button>
              <button class="btn btn-ghost" data-view="pastpapers">Browse Papers</button>
              <button class="btn btn-gold" data-view="report">Report Issue</button>
            </div>
          </div>

          <div class="metric-grid">
            <article class="metric-card reveal">
              <span class="metric-label">Completed Labs</span>
              <strong id="homeCompleted">0</strong>
              <span>saved practical completions</span>
            </article>
            <article class="metric-card reveal">
              <span class="metric-label">Current Streak</span>
              <strong id="homeStreak">0</strong>
              <span>study days in a row</span>
            </article>
            <article class="metric-card reveal">
              <span class="metric-label">Graph Sessions</span>
              <strong id="homeGraphs">0</strong>
              <span>plot refreshes logged</span>
            </article>
          </div>

          <div class="quick-grid">
            <article class="quick-card reveal">
              <div class="bubble blue">01</div>
              <h2>Open Real Questions</h2>
              <p>Work through the 2025 Paper 3 practical variants with matching mechanisms and graphs.</p>
              <button class="btn btn-blue" data-view="pastpapers">Open Past Papers</button>
            </article>
            <article class="quick-card reveal">
              <div class="bubble teal">02</div>
              <h2>Study The Mechanism</h2>
              <p>Each SVG apparatus moves as the variables change, so the setup and graph stay connected.</p>
              <button class="btn btn-teal" id="studyMechanismBtn">Open A Mechanism</button>
            </article>
            <article class="quick-card reveal">
              <div class="bubble gold">03</div>
              <h2>Track Progress</h2>
              <p>Save completed labs, add weak topics, log reviews, and keep a local study record.</p>
              <button class="btn btn-gold" data-view="progress">Open Progress</button>
            </article>
          </div>
        </div>
      </section>

      <section class="view" id="view-pastpapers">
        <div class="section">
          <div class="section-head">
            <div>
              <p class="section-kicker">Paper Deck</p>
              <h2 class="section-title">Past Paper Experiments</h2>
              <p class="section-sub">Open any question to load its mechanism, table, sliders, graph, and exam notes.</p>
            </div>
          </div>
          <div class="paper-deck" id="paperDeck"></div>
        </div>
      </section>

      <section class="view" id="view-practice">
        <div class="section practice-layout">
          <aside class="side-stack">
            <div class="glass practice-logo reveal">
              <div class="tiny-planet"></div>
              <div class="brand-big">Undy<span class="accent">X</span></div>
              <p>Switch paper, open a question, then tune the apparatus like a real practical station.</p>
            </div>
            <div class="glass sidebar-card reveal">
              <h2>Paper Filter</h2>
              <div class="filter-pills" id="paperFilter"></div>
            </div>
            <div class="glass sidebar-card reveal">
              <div class="sidebar-title-row">
                <h2>Question Deck</h2>
                <div class="question-count" id="questionCount">Question 1 of 8</div>
              </div>
              <div class="question-list" id="questionList"></div>
            </div>
            <div class="glass sidebar-card reveal">
              <h2>Study Tools</h2>
              <div class="study-tools">
                <button class="btn btn-ghost compact-btn" id="completeCurrentBtn">Save Completed Lab</button>
                <button class="btn btn-ghost compact-btn" id="logReviewBtn">Log Review Session</button>
                <button class="btn btn-ghost compact-btn" data-view="report">Report This Issue</button>
              </div>
            </div>
          </aside>

          <div class="big-panel reveal">
            <div class="practice-grid">
              <div class="question-header">
                <div class="question-paper" id="questionPaper">9702/31 - Question 1</div>
                <h2 class="question-title" id="practiceHeading">Question Title</h2>
                <p class="question-text" id="practiceIntro"></p>
                <div class="pill-row" id="questionTags"></div>
              </div>

              <div class="diagram-box">
                <div class="mechanism-card">
                  <div class="mech-topbar">
                    <div class="mech-label" id="mechanismLabel">Interactive Apparatus</div>
                    <div class="mech-status"></div>
                  </div>
                  <svg id="mechanismSvg" class="mechanism-svg" viewBox="0 0 420 360" aria-label="Apparatus mechanism"></svg>
                </div>
                <div class="detail-card">
                  <p id="mechanismDescription" class="mechanism-description"></p>
                  <div class="detail-grid" id="detailStats"></div>
                  <div class="sliders" id="sliderPanel"></div>
                </div>
              </div>

              <div class="paper-parts" id="paperParts"></div>
              <div class="results-table-wrap" id="resultsTableWrap"></div>

              <div class="graph-panel">
                <div class="graph-head">
                  <div>
                    <h2>Analysis Graph</h2>
                    <p id="graphSub">Updated directly from the current mechanism values.</p>
                  </div>
                  <button class="btn btn-ghost compact-btn" id="refreshGraphBtn">Refresh Plot</button>
                </div>
                <svg id="chartSvg" class="chart" viewBox="0 0 760 360" aria-label="Graph or comparison chart"></svg>
              </div>

              <div class="analysis-grid">
                <div class="formula-box" id="formulaBox"></div>
                <div class="formula-box" id="notesBox"></div>
              </div>
            </div>

            <div class="toolbar">
              <button class="btn btn-ghost inline-btn" data-view="pastpapers">Back To Papers</button>
              <button class="btn btn-ghost inline-btn" id="prevQuestionBtn">Previous</button>
              <button class="btn btn-ghost inline-btn" id="nextQuestionBtn">Next</button>
              <button class="btn btn-teal inline-btn" id="logEvaluationBtn">Log Evaluation</button>
              <button class="btn btn-blue inline-btn" id="refreshSimulationBtn">Refresh Simulation</button>
            </div>
          </div>
        </div>
      </section>

      <section class="view" id="view-progress">
        <div class="section">
          <div class="section-head">
            <div>
              <p class="section-kicker">Student Dashboard</p>
              <h2 class="section-title">Progress Orbit</h2>
              <p class="section-sub">Your progress is saved in this browser with local storage.</p>
            </div>
          </div>

          <div class="progress-page-grid">
            <article class="panel progress-card reveal">
              <div class="streak-head">
                <div>
                  <p class="progress-card-kicker">Daily Streak</p>
                  <h2>Study Fire</h2>
                </div>
                <button class="btn btn-ghost compact-btn" id="logStudyDayBtn">Log Today</button>
              </div>
              <div class="streak-core">
                <span class="flame flame-a"></span>
                <span class="flame flame-b"></span>
                <span class="flame flame-c"></span>
                <strong id="streakCount">0</strong>
              </div>
              <p class="streak-meta" id="streakMeta">No study activity logged yet.</p>
              <div class="streak-track" id="streakTrack"></div>
            </article>

            <article class="panel progress-card reveal">
              <p class="progress-card-kicker">Overview</p>
              <h2>Revision Summary</h2>
              <div class="progress-overview-grid">
                <div class="progress-stat-card">
                  <span>Completed Labs</span>
                  <strong id="progressCompleted">0</strong>
                </div>
                <div class="progress-stat-card">
                  <span>Preparedness</span>
                  <strong id="progressPreparedness">0%</strong>
                </div>
                <div class="progress-stat-card">
                  <span>Graph Sessions</span>
                  <strong id="progressGraphs">0</strong>
                </div>
                <div class="progress-stat-card">
                  <span>Evaluation Logs</span>
                  <strong id="progressEvaluation">0</strong>
                </div>
              </div>
            </article>

            <article class="panel progress-card reveal">
              <p class="progress-card-kicker">Weak Topics</p>
              <h2>Focus List</h2>
              <form class="weak-form" id="weakTopicForm">
                <input class="weak-input" id="weakTopicInput" type="text" placeholder="Add a weak topic" />
                <button class="btn btn-blue compact-btn" type="submit">Add Topic</button>
              </form>
              <div class="suggestion-wrap" id="weakTopicSuggestions"></div>
              <div class="progress-tag-wrap" id="customWeakTopics"></div>
            </article>

            <article class="panel progress-card reveal">
              <p class="progress-card-kicker">Attention Needed</p>
              <h2>Low Coverage Topics</h2>
              <div class="progress-tag-wrap" id="derivedWeakTopics"></div>
            </article>

            <article class="panel progress-card reveal">
              <p class="progress-card-kicker">Performance</p>
              <h2>Skill Bars</h2>
              <div class="progress-bars-wrap">
                <div class="progress-bar-row">
                  <span>Graph Skills</span>
                  <div class="progress-bar"><div class="progress-bar-fill blue-fill" id="graphSkillBar"></div></div>
                </div>
                <div class="progress-bar-row">
                  <span>Practical Completion</span>
                  <div class="progress-bar"><div class="progress-bar-fill green-fill" id="completionBar"></div></div>
                </div>
                <div class="progress-bar-row">
                  <span>Evaluation / Uncertainty</span>
                  <div class="progress-bar"><div class="progress-bar-fill gold-fill" id="evaluationBar"></div></div>
                </div>
                <div class="progress-bar-row">
                  <span>Streak Momentum</span>
                  <div class="progress-bar"><div class="progress-bar-fill ember-fill" id="streakBar"></div></div>
                </div>
              </div>
            </article>

            <article class="panel progress-card reveal">
              <p class="progress-card-kicker">Study Log</p>
              <h2>Recent Activity</h2>
              <div class="progress-list" id="recentActivityList"></div>
            </article>

            <article class="panel progress-card reveal">
              <p class="progress-card-kicker">Completed Work</p>
              <h2>Finished Practicals</h2>
              <div class="progress-list" id="completedExperimentsList"></div>
            </article>
          </div>
        </div>
      </section>

      <section class="view" id="view-report">
        <div class="section">
          <div class="section-head">
            <div>
              <p class="section-kicker">Student Feedback</p>
              <h2 class="section-title">Report Issue</h2>
              <p class="section-sub">Students can write a website issue, save it locally, and include the current simulation context.</p>
            </div>
          </div>

          <div class="report-grid">
            <form class="panel report-form reveal" id="reportForm">
              <label>
                Your name or class
                <input id="reportName" type="text" placeholder="Optional" />
              </label>
              <label>
                Issue type
                <select id="reportType">
                  <option>Mechanism problem</option>
                  <option>Graph or data problem</option>
                  <option>Progress saving problem</option>
                  <option>Text or spelling problem</option>
                  <option>Other website issue</option>
                </select>
              </label>
              <label>
                Short title
                <input id="reportTitle" type="text" maxlength="90" placeholder="What went wrong?" required />
              </label>
              <label>
                Details
                <textarea id="reportDetails" rows="7" placeholder="Write what you saw, what you clicked, and what you expected." required></textarea>
              </label>
              <div class="report-actions">
                <button class="btn btn-blue" type="submit">Save Report</button>
                <button class="btn btn-ghost" type="button" id="clearReportFormBtn">Clear</button>
              </div>
            </form>

            <article class="panel report-list-card reveal">
              <div class="report-list-head">
                <div>
                  <p class="progress-card-kicker">Local Reports</p>
                  <h2>Saved Issue Reports</h2>
                </div>
                <button class="btn btn-ghost compact-btn" id="clearReportsBtn">Clear Reports</button>
              </div>
              <div class="report-context" id="reportContext"></div>
              <div class="progress-list" id="reportList"></div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  </div>

  <script src=".idea\UndyX.js"></script>
</body>
</html>
