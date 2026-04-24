const STORAGE_KEY = "undyx-physics-motion-lab";

const papers = [
    {
        id: "mj24-p42-q1",
        code: "9702/42 Q1",
        session: "May/June 2024",
        paperType: "Paper 4",
        topic: "Mechanics",
        title: "Projectile from a raised platform",
        prompt: "A sphere is launched from a bench and students must compare range, flight time, and impact speed.",
        difficulty: "High",
        mechanism: "projectile",
        focus: ["SUVAT linking", "vector split", "graph interpretation"],
        formula: "R = u cos(theta) * t and y = h + u sin(theta) t - 0.5 g t^2",
        tip: "Write horizontal and vertical motion separately before substituting values.",
        simPreset: { speed: 30, angle: 44, height: 3.2, gravity: 9.81 }
    },
    {
        id: "mj24-p31-q2",
        code: "9702/31 Q2",
        session: "May/June 2024",
        paperType: "Paper 3",
        topic: "Oscillations",
        title: "Pendulum timing practical",
        prompt: "A simple pendulum practical asks for timing data, repeated trials, and analysis of period against length.",
        difficulty: "Medium",
        mechanism: "pendulum",
        focus: ["period timing", "gradient meaning", "uncertainty control"],
        formula: "T = 2 pi sqrt(L / g)",
        tip: "Measure multiple oscillations at once so your timing uncertainty falls.",
        simPreset: { length: 1.6, amplitude: 18, gravity: 9.81, damping: 0.03 }
    },
    {
        id: "mj24-p52-q3",
        code: "9702/52 Q3",
        session: "May/June 2024",
        paperType: "Paper 5",
        topic: "Oscillations",
        title: "Damped spring modelling",
        prompt: "A data analysis question uses logarithmic decay and asks students to identify how damping changes the motion envelope.",
        difficulty: "High",
        mechanism: "spring",
        focus: ["envelope reading", "energy loss", "model evaluation"],
        formula: "x = A e^(-beta t) cos(omega_d t)",
        tip: "Check whether the question wants displacement behavior or energy behavior before choosing an equation.",
        simPreset: { mass: 0.9, stiffness: 18, amplitude: 0.22, damping: 0.08 }
    },
    {
        id: "on23-p42-q2",
        code: "9702/42 Q2",
        session: "Oct/Nov 2023",
        paperType: "Paper 4",
        topic: "Mechanics",
        title: "Horizontal launch and impact angle",
        prompt: "Students determine the impact angle for a projectile launched horizontally from a cliff edge.",
        difficulty: "High",
        mechanism: "projectile",
        focus: ["horizontal launch", "impact components", "trigonometric ratio"],
        formula: "tan(phi) = v_y / v_x at impact",
        tip: "For a horizontal launch, the initial vertical velocity is zero, so the vertical motion starts from rest.",
        simPreset: { speed: 22, angle: 18, height: 9, gravity: 9.81 }
    },
    {
        id: "on23-p31-q1",
        code: "9702/31 Q1",
        session: "Oct/Nov 2023",
        paperType: "Paper 3",
        topic: "Experimental",
        title: "Spring extension to oscillation transition",
        prompt: "A practical question moves from static extension readings to the timing of vertical oscillations for the same spring.",
        difficulty: "Medium",
        mechanism: "spring",
        focus: ["Hooke's law", "time for 10 oscillations", "gradient units"],
        formula: "T = 2 pi sqrt(m / k)",
        tip: "If static and dynamic parts appear together, check whether k should come from a graph or a time measurement.",
        simPreset: { mass: 0.6, stiffness: 26, amplitude: 0.16, damping: 0.04 }
    },
    {
        id: "mj23-p42-q4",
        code: "9702/42 Q4",
        session: "May/June 2023",
        paperType: "Paper 4",
        topic: "Oscillations",
        title: "Simple harmonic motion energy exchange",
        prompt: "The question asks when the energy of an oscillating particle is entirely kinetic and how displacement changes across the cycle.",
        difficulty: "Medium",
        mechanism: "spring",
        focus: ["phase position", "energy transfer", "maximum speed"],
        formula: "E = 0.5 k x^2 + 0.5 m v^2",
        tip: "In SHM, maximum kinetic energy occurs at equilibrium, not at maximum displacement.",
        simPreset: { mass: 1.1, stiffness: 14, amplitude: 0.28, damping: 0.02 }
    },
    {
        id: "mj23-p52-q1",
        code: "9702/52 Q1",
        session: "May/June 2023",
        paperType: "Paper 5",
        topic: "Mechanics",
        title: "Best-fit trajectory comparison",
        prompt: "A graph-based analysis compares theoretical projectile paths under different gravitational fields.",
        difficulty: "High",
        mechanism: "projectile",
        focus: ["curve comparison", "sensitivity test", "model limitation"],
        formula: "y = h + x tan(theta) - g x^2 / (2 u^2 cos^2(theta))",
        tip: "When the graph is already in x and y, use the trajectory equation directly instead of converting back to time unless needed.",
        simPreset: { speed: 36, angle: 52, height: 2.5, gravity: 6.5 }
    },
    {
        id: "on22-p42-q1",
        code: "9702/42 Q1",
        session: "Oct/Nov 2022",
        paperType: "Paper 4",
        topic: "Oscillations",
        title: "Pendulum on the Moon",
        prompt: "Students compare the period of a pendulum on Earth and on the Moon and explain the role of gravity.",
        difficulty: "Medium",
        mechanism: "pendulum",
        focus: ["gravitational comparison", "period ratio", "qualitative explanation"],
        formula: "T proportional to 1 / sqrt(g)",
        tip: "Only g changes here, so keep length fixed when comparing periods.",
        simPreset: { length: 1.2, amplitude: 14, gravity: 1.62, damping: 0.01 }
    },
    {
        id: "on22-p31-q2",
        code: "9702/31 Q2",
        session: "Oct/Nov 2022",
        paperType: "Paper 3",
        topic: "Experimental",
        title: "Resonance and spring response",
        prompt: "A practical explores how a driven spring responds close to resonance and asks for observations on amplitude change.",
        difficulty: "Medium",
        mechanism: "spring",
        focus: ["amplitude trend", "qualitative damping", "observation wording"],
        formula: "f_0 = (1 / 2 pi) sqrt(k / m)",
        tip: "Do not confuse a larger amplitude with a larger restoring force; the question may be testing language accuracy.",
        simPreset: { mass: 0.75, stiffness: 22, amplitude: 0.24, damping: 0.06 }
    },
    {
        id: "mj22-p42-q2",
        code: "9702/42 Q2",
        session: "May/June 2022",
        paperType: "Paper 4",
        topic: "Mechanics",
        title: "Range optimization with fixed speed",
        prompt: "A projectile question asks which launch angle gives maximum range and why changing the angle too far reduces it.",
        difficulty: "Medium",
        mechanism: "projectile",
        focus: ["angle symmetry", "range condition", "reasoning from formula"],
        formula: "Maximum range at 45 degrees for equal launch and landing height",
        tip: "If landing height is the same as launch height, test the 45 degree condition before doing longer algebra.",
        simPreset: { speed: 28, angle: 45, height: 0, gravity: 9.81 }
    },
    {
        id: "mj22-p52-q4",
        code: "9702/52 Q4",
        session: "May/June 2022",
        paperType: "Paper 5",
        topic: "Oscillations",
        title: "Pendulum length planning task",
        prompt: "The design task asks for a pendulum arrangement that gives a target period with minimal percentage uncertainty.",
        difficulty: "High",
        mechanism: "pendulum",
        focus: ["planning", "percentage uncertainty", "length choice"],
        formula: "L = g T^2 / (4 pi^2)",
        tip: "A longer pendulum often reduces percentage uncertainty because absolute measurement error stays similar.",
        simPreset: { length: 2.2, amplitude: 12, gravity: 9.81, damping: 0.02 }
    },
    {
        id: "on21-p42-q3",
        code: "9702/42 Q3",
        session: "Oct/Nov 2021",
        paperType: "Paper 4",
        topic: "Mechanics",
        title: "Projectile in reduced gravity",
        prompt: "A comparison question asks how time of flight and range change when the same launch occurs on a planet with smaller g.",
        difficulty: "Medium",
        mechanism: "projectile",
        focus: ["variable isolation", "comparative ratios", "clear statements"],
        formula: "For fixed u and theta, t and R increase as g decreases",
        tip: "State which quantities are kept constant before describing what changes.",
        simPreset: { speed: 26, angle: 39, height: 1.5, gravity: 3.71 }
    },
    {
        id: "on21-p31-q1",
        code: "9702/31 Q1",
        session: "Oct/Nov 2021",
        paperType: "Paper 3",
        topic: "Oscillations",
        title: "Timing a loaded spring",
        prompt: "A practical uses increasing mass values on a spring and asks for a graph to identify the spring constant.",
        difficulty: "Medium",
        mechanism: "spring",
        focus: ["T^2 graph", "gradient use", "repeated timing"],
        formula: "T^2 = 4 pi^2 m / k",
        tip: "Plot the squared period if you want the cleanest straight-line relationship with mass.",
        simPreset: { mass: 1.4, stiffness: 12, amplitude: 0.19, damping: 0.03 }
    },
    {
        id: "mj21-p42-q5",
        code: "9702/42 Q5",
        session: "May/June 2021",
        paperType: "Paper 4",
        topic: "Oscillations",
        title: "Pendulum amplitude decay",
        prompt: "The question asks students to explain why the amplitude decreases while the period stays almost constant for small damping.",
        difficulty: "High",
        mechanism: "pendulum",
        focus: ["damping explanation", "period reasoning", "energy pathway"],
        formula: "theta = theta_0 e^(-beta t) cos(omega t)",
        tip: "Separate the role of damping on amplitude from the role of length and gravity on period.",
        simPreset: { length: 1.7, amplitude: 24, gravity: 9.81, damping: 0.08 }
    },
    {
        id: "mj21-p52-q2",
        code: "9702/52 Q2",
        session: "May/June 2021",
        paperType: "Paper 5",
        topic: "Experimental",
        title: "Launch angle investigation",
        prompt: "Students plan a projectile experiment and evaluate how angle uncertainty affects range measurements.",
        difficulty: "High",
        mechanism: "projectile",
        focus: ["planning variables", "uncertainty sources", "sensible precision"],
        formula: "R proportional to sin(2 theta) for equal heights",
        tip: "The range is most sensitive to angle error when the launch angle moves away from the broad top of the curve.",
        simPreset: { speed: 24, angle: 48, height: 1.2, gravity: 9.81 }
    },
    {
        id: "on20-p42-q1",
        code: "9702/42 Q1",
        session: "Oct/Nov 2020",
        paperType: "Paper 4",
        topic: "Mechanics",
        title: "Peak height comparison",
        prompt: "A projectile problem compares two launch angles with the same speed and asks which gives the larger maximum height.",
        difficulty: "Medium",
        mechanism: "projectile",
        focus: ["vertical component", "max-height formula", "comparison reasoning"],
        formula: "H = h + u^2 sin^2(theta) / (2 g)",
        tip: "Peak height depends only on the vertical launch component, not the horizontal one.",
        simPreset: { speed: 32, angle: 58, height: 0.5, gravity: 9.81 }
    },
    {
        id: "on20-p31-q2",
        code: "9702/31 Q2",
        session: "Oct/Nov 2020",
        paperType: "Paper 3",
        topic: "Oscillations",
        title: "Comparing two pendulum lengths",
        prompt: "Students measure the periods of two pendulums and evaluate whether the results agree with theory within uncertainty.",
        difficulty: "Medium",
        mechanism: "pendulum",
        focus: ["ratio check", "percentage difference", "experimental judgement"],
        formula: "T_1 / T_2 = sqrt(L_1 / L_2)",
        tip: "When the command word is compare, include uncertainty language instead of only raw numbers.",
        simPreset: { length: 2.5, amplitude: 10, gravity: 9.81, damping: 0.015 }
    },
    {
        id: "mj20-p52-q3",
        code: "9702/52 Q3",
        session: "May/June 2020",
        paperType: "Paper 5",
        topic: "Oscillations",
        title: "Spring energy plotting",
        prompt: "A model question asks for a sketch of displacement, speed, and energy changes throughout one cycle.",
        difficulty: "High",
        mechanism: "spring",
        focus: ["phase sketch", "energy maxima", "cycle timing"],
        formula: "v = omega sqrt(A^2 - x^2)",
        tip: "If you are sketching multiple graphs, align key times such as maximum displacement and equilibrium crossing first.",
        simPreset: { mass: 1.0, stiffness: 20, amplitude: 0.3, damping: 0.01 }
    }
];

const simulations = {
    projectile: {
        label: "Projectile Motion",
        description: "Watch horizontal velocity stay constant while gravity bends the path downward.",
        controls: [
            { key: "speed", label: "Launch speed", min: 10, max: 45, step: 1, unit: "m/s", value: 30 },
            { key: "angle", label: "Launch angle", min: 10, max: 75, step: 1, unit: "deg", value: 44 },
            { key: "height", label: "Launch height", min: 0, max: 12, step: 0.1, unit: "m", value: 3.2 },
            { key: "gravity", label: "Gravity", min: 1.6, max: 12, step: 0.01, unit: "m/s^2", value: 9.81 }
        ],
        draw(ctx, size, values, elapsed) {
            const width = size.width;
            const height = size.height;
            paintCanvasBase(ctx, width, height, "#3ab8ff");

            const radians = degToRad(values.angle);
            const vx = values.speed * Math.cos(radians);
            const vy = values.speed * Math.sin(radians);
            const discriminant = Math.max((vy * vy) + (2 * values.gravity * values.height), 0);
            const flightTime = (vy + Math.sqrt(discriminant)) / values.gravity;
            const maxHeight = values.height + ((vy * vy) / (2 * values.gravity));
            const range = vx * flightTime;
            const peakTime = vy / values.gravity;
            const cycle = flightTime + 0.85;
            const sampleTime = Math.min(elapsed % cycle, flightTime);
            const xNow = vx * sampleTime;
            const yNow = values.height + (vy * sampleTime) - (0.5 * values.gravity * sampleTime * sampleTime);
            const currentSpeed = Math.sqrt((vx * vx) + Math.pow(vy - (values.gravity * sampleTime), 2));

            const margin = 58;
            const drawWidth = width - (margin * 2);
            const drawHeight = height - (margin * 2);
            const maxX = Math.max(range * 1.12, 10);
            const maxY = Math.max(maxHeight * 1.18, values.height + 2);
            const groundY = height - margin;

            const toCanvasX = (value) => margin + ((value / maxX) * drawWidth);
            const toCanvasY = (value) => groundY - ((value / maxY) * drawHeight);

            ctx.save();
            ctx.strokeStyle = "rgba(255,255,255,0.1)";
            ctx.lineWidth = 1;
            for (let i = 0; i <= 5; i += 1) {
                const y = margin + ((drawHeight / 5) * i);
                ctx.beginPath();
                ctx.moveTo(margin, y);
                ctx.lineTo(width - margin, y);
                ctx.stroke();
            }
            ctx.beginPath();
            ctx.moveTo(margin, groundY);
            ctx.lineTo(width - margin, groundY);
            ctx.strokeStyle = "rgba(255, 143, 47, 0.45)";
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            for (let i = 0; i <= 120; i += 1) {
                const t = flightTime * (i / 120);
                const x = vx * t;
                const y = values.height + (vy * t) - (0.5 * values.gravity * t * t);
                const px = toCanvasX(x);
                const py = toCanvasY(y);
                if (i === 0) {
                    ctx.moveTo(px, py);
                } else {
                    ctx.lineTo(px, py);
                }
            }
            ctx.strokeStyle = "rgba(58, 184, 255, 0.95)";
            ctx.lineWidth = 3;
            ctx.shadowColor = "rgba(58, 184, 255, 0.35)";
            ctx.shadowBlur = 16;
            ctx.stroke();
            ctx.restore();

            const ballX = toCanvasX(xNow);
            const ballY = toCanvasY(Math.max(yNow, 0));

            ctx.save();
            ctx.fillStyle = "rgba(255, 143, 47, 0.9)";
            ctx.beginPath();
            ctx.arc(ballX, ballY, 11, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            const peakX = toCanvasX(vx * peakTime);
            const peakY = toCanvasY(maxHeight);
            ctx.save();
            ctx.setLineDash([8, 8]);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
            ctx.beginPath();
            ctx.moveTo(peakX, peakY);
            ctx.lineTo(peakX, groundY);
            ctx.stroke();
            ctx.restore();

            drawCanvasLabel(ctx, margin, margin - 16, "Projectile path");
            drawCanvasLabel(ctx, peakX + 12, peakY - 8, "Peak");

            return {
                caption: "Real behavior: horizontal speed is constant, but vertical speed changes by g every second.",
                readouts: [
                    { label: "Flight time", value: formatNumber(flightTime, 2) + " s" },
                    { label: "Range", value: formatNumber(range, 2) + " m" },
                    { label: "Max height", value: formatNumber(maxHeight, 2) + " m" },
                    { label: "Current speed", value: formatNumber(currentSpeed, 2) + " m/s" }
                ]
            };
        }
    },
    pendulum: {
        label: "Pendulum",
        description: "See how the period stretches with longer length and shrinks in stronger gravity.",
        controls: [
            { key: "length", label: "Length", min: 0.5, max: 3, step: 0.01, unit: "m", value: 1.6 },
            { key: "amplitude", label: "Amplitude", min: 4, max: 30, step: 1, unit: "deg", value: 18 },
            { key: "gravity", label: "Gravity", min: 1.6, max: 12, step: 0.01, unit: "m/s^2", value: 9.81 },
            { key: "damping", label: "Damping", min: 0, max: 0.12, step: 0.005, unit: "", value: 0.03 }
        ],
        draw(ctx, size, values, elapsed) {
            const width = size.width;
            const height = size.height;
            paintCanvasBase(ctx, width, height, "#60f4d4");

            const pivotX = width * 0.5;
            const pivotY = 90;
            const lengthPx = mapRange(values.length, 0.5, 3, 130, Math.min(height * 0.42, 270));
            const theta0 = degToRad(values.amplitude);
            const omega = Math.sqrt(values.gravity / values.length);
            const decay = Math.exp(-values.damping * elapsed);
            const theta = theta0 * decay * Math.cos(omega * elapsed);
            const thetaDot = -theta0 * decay * ((values.damping * Math.cos(omega * elapsed)) + (omega * Math.sin(omega * elapsed)));
            const bobX = pivotX + (lengthPx * Math.sin(theta));
            const bobY = pivotY + (lengthPx * Math.cos(theta));
            const period = (2 * Math.PI) / omega;
            const bobSpeed = Math.abs(thetaDot) * values.length;

            ctx.save();
            ctx.fillStyle = "rgba(255,255,255,0.14)";
            ctx.fillRect(pivotX - 96, pivotY - 16, 192, 10);
            ctx.restore();

            ctx.save();
            ctx.strokeStyle = "rgba(255,255,255,0.16)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(pivotX, pivotY, lengthPx, degToRad(90 - values.amplitude), degToRad(90 + values.amplitude));
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.strokeStyle = "rgba(96, 244, 212, 0.95)";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(pivotX, pivotY);
            ctx.lineTo(bobX, bobY);
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            for (let i = 0; i <= 32; i += 1) {
                const trailTime = Math.max(elapsed - (i * 0.08), 0);
                const trailDecay = Math.exp(-values.damping * trailTime);
                const trailTheta = theta0 * trailDecay * Math.cos(omega * trailTime);
                const trailX = pivotX + (lengthPx * Math.sin(trailTheta));
                const trailY = pivotY + (lengthPx * Math.cos(trailTheta));
                if (i === 0) {
                    ctx.moveTo(trailX, trailY);
                } else {
                    ctx.lineTo(trailX, trailY);
                }
            }
            ctx.strokeStyle = "rgba(58, 184, 255, 0.3)";
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.fillStyle = "rgba(255, 143, 47, 0.92)";
            ctx.beginPath();
            ctx.arc(bobX, bobY, 22, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            drawCanvasLabel(ctx, pivotX - 70, pivotY - 28, "Pendulum support");
            drawCanvasLabel(ctx, bobX + 18, bobY + 4, "Bob");

            return {
                caption: "Real behavior: for small angles, period depends mainly on length and gravity, while damping mostly shrinks amplitude.",
                readouts: [
                    { label: "Period", value: formatNumber(period, 2) + " s" },
                    { label: "Frequency", value: formatNumber(1 / period, 2) + " Hz" },
                    { label: "Current angle", value: formatNumber(radToDeg(theta), 1) + " deg" },
                    { label: "Bob speed", value: formatNumber(bobSpeed, 2) + " m/s" }
                ]
            };
        }
    },
    spring: {
        label: "Spring-Mass",
        description: "Track oscillation, damping, and energy as the mass moves across equilibrium.",
        controls: [
            { key: "mass", label: "Mass", min: 0.2, max: 2, step: 0.01, unit: "kg", value: 0.9 },
            { key: "stiffness", label: "Spring constant", min: 6, max: 34, step: 0.1, unit: "N/m", value: 18 },
            { key: "amplitude", label: "Amplitude", min: 0.05, max: 0.35, step: 0.01, unit: "m", value: 0.22 },
            { key: "damping", label: "Damping", min: 0, max: 0.18, step: 0.005, unit: "", value: 0.08 }
        ],
        draw(ctx, size, values, elapsed) {
            const width = size.width;
            const height = size.height;
            paintCanvasBase(ctx, width, height, "#ff8f2f");

            const omega0 = Math.sqrt(values.stiffness / values.mass);
            const omegaD = Math.sqrt(Math.max((omega0 * omega0) - (values.damping * values.damping), 0.08));
            const decay = Math.exp(-values.damping * elapsed);
            const x = values.amplitude * decay * Math.cos(omegaD * elapsed);
            const v = values.amplitude * decay * ((-values.damping * Math.cos(omegaD * elapsed)) - (omegaD * Math.sin(omegaD * elapsed)));
            const totalEnergy = (0.5 * values.stiffness * x * x) + (0.5 * values.mass * v * v);
            const period = (2 * Math.PI) / omega0;
            const frequency = 1 / period;

            const anchorX = 86;
            const centerY = height * 0.58;
            const equilibriumX = width * 0.48;
            const scale = 300;
            const massWidth = 108;
            const massHeight = 72;
            const leftEdge = equilibriumX + (x * scale);
            const rightEdge = leftEdge + massWidth;

            ctx.save();
            ctx.fillStyle = "rgba(255,255,255,0.14)";
            ctx.fillRect(anchorX - 14, centerY - 92, 16, 184);
            ctx.fillRect(46, centerY + 62, width - 92, 8);
            ctx.restore();

            drawSpring(ctx, anchorX, leftEdge, centerY, 11, 24);

            ctx.save();
            ctx.fillStyle = "rgba(58, 184, 255, 0.95)";
            roundRect(ctx, leftEdge, centerY - (massHeight / 2), massWidth, massHeight, 20);
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.setLineDash([9, 8]);
            ctx.strokeStyle = "rgba(255,255,255,0.2)";
            ctx.beginPath();
            ctx.moveTo(equilibriumX, centerY - 110);
            ctx.lineTo(equilibriumX, centerY + 110);
            ctx.stroke();
            ctx.restore();

            const barX = width - 82;
            const barHeight = 220;
            const energyHeight = Math.min((totalEnergy / 0.7) * barHeight, barHeight);
            ctx.save();
            ctx.fillStyle = "rgba(255,255,255,0.08)";
            roundRect(ctx, barX, centerY - (barHeight / 2), 22, barHeight, 12);
            ctx.fill();
            ctx.fillStyle = "rgba(255, 143, 47, 0.88)";
            roundRect(ctx, barX, centerY + (barHeight / 2) - energyHeight, 22, energyHeight, 12);
            ctx.fill();
            ctx.restore();

            drawCanvasLabel(ctx, equilibriumX + 10, centerY - 122, "Equilibrium");
            drawCanvasLabel(ctx, barX - 48, centerY - 128, "Energy");

            return {
                caption: "Real behavior: a stiffer spring raises the frequency, while damping slowly drains the amplitude and total energy.",
                readouts: [
                    { label: "Period", value: formatNumber(period, 2) + " s" },
                    { label: "Frequency", value: formatNumber(frequency, 2) + " Hz" },
                    { label: "Displacement", value: formatNumber(x, 3) + " m" },
                    { label: "Total energy", value: formatNumber(totalEnergy, 3) + " J" }
                ]
            };
        }
    }
};

const topicNames = ["All", ...new Set(papers.map((paper) => paper.topic))];
const simulationKeys = Object.keys(simulations);
const defaults = Object.fromEntries(
    simulationKeys.map((key) => [
        key,
        Object.fromEntries(simulations[key].controls.map((control) => [control.key, control.value]))
    ])
);

const state = {
    query: "",
    topic: "All",
    activePaperId: papers[0].id,
    challengePaperId: papers[3].id,
    activeSimulation: "projectile",
    running: true,
    elapsed: 0,
    lastFrame: 0,
    completed: new Set(),
    controls: clone(defaults),
    linkedPaperId: papers[0].id
};

const refs = {
    papersMetric: document.getElementById("papersMetric"),
    topicsMetric: document.getElementById("topicsMetric"),
    mechanismMetric: document.getElementById("mechanismMetric"),
    revisedMetric: document.getElementById("revisedMetric"),
    paperSearch: document.getElementById("paperSearch"),
    topicFilters: document.getElementById("topicFilters"),
    paperCount: document.getElementById("paperCount"),
    completedCount: document.getElementById("completedCount"),
    paperGrid: document.getElementById("paperGrid"),
    spotlightTitle: document.getElementById("spotlightTitle"),
    spotlightMeta: document.getElementById("spotlightMeta"),
    spotlightPrompt: document.getElementById("spotlightPrompt"),
    spotlightTargets: document.getElementById("spotlightTargets"),
    spotlightFormula: document.getElementById("spotlightFormula"),
    spotlightTip: document.getElementById("spotlightTip"),
    toggleComplete: document.getElementById("toggleComplete"),
    loadMechanism: document.getElementById("loadMechanism"),
    clearFilters: document.getElementById("clearFilters"),
    surpriseMe: document.getElementById("surpriseMe"),
    simTabs: document.getElementById("simTabs"),
    activeMechanismBadge: document.getElementById("activeMechanismBadge"),
    simulationDescription: document.getElementById("simulationDescription"),
    linkedPaperCode: document.getElementById("linkedPaperCode"),
    linkedPaperPrompt: document.getElementById("linkedPaperPrompt"),
    canvas: document.getElementById("physicsCanvas"),
    canvasCaption: document.getElementById("canvasCaption"),
    controlGroup: document.getElementById("controlGroup"),
    toggleMotion: document.getElementById("toggleMotion"),
    resetMotion: document.getElementById("resetMotion"),
    randomizeValues: document.getElementById("randomizeValues"),
    readoutGrid: document.getElementById("readoutGrid"),
    motionState: document.getElementById("motionState"),
    newChallenge: document.getElementById("newChallenge"),
    challengeCard: document.getElementById("challengeCard")
};

const ctx = refs.canvas.getContext("2d");

function init() {
    loadProgress();
    animateHeroMetrics(true);
    renderTopicFilters();
    renderPaperGrid();
    renderSpotlight();
    renderSimulationTabs();
    renderControls();
    renderChallenge();
    resizeCanvas();
    setupEvents();
    observeReveal();
    requestAnimationFrame(frame);
}

function setupEvents() {
    refs.paperSearch.addEventListener("input", (event) => {
        state.query = event.target.value.trim().toLowerCase();
        renderPaperGrid();
        renderChallenge();
    });

    refs.topicFilters.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-topic]");
        if (!button) {
            return;
        }
        state.topic = button.dataset.topic;
        renderTopicFilters();
        renderPaperGrid();
        renderChallenge();
    });

    refs.paperGrid.addEventListener("click", (event) => {
        const card = event.target.closest("button[data-paper-id]");
        if (!card) {
            return;
        }
        state.activePaperId = card.dataset.paperId;
        renderPaperGrid();
        renderSpotlight();
    });

    refs.toggleComplete.addEventListener("click", () => {
        if (state.completed.has(state.activePaperId)) {
            state.completed.delete(state.activePaperId);
        } else {
            state.completed.add(state.activePaperId);
        }
        saveProgress();
        animateHeroMetrics(false);
        renderPaperGrid();
        renderSpotlight();
        renderChallenge();
    });

    refs.loadMechanism.addEventListener("click", () => {
        const paper = getPaper(state.activePaperId);
        applyPaperPreset(paper, true);
    });

    refs.simTabs.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-sim]");
        if (!button) {
            return;
        }
        state.activeSimulation = button.dataset.sim;
        state.elapsed = 0;
        renderSimulationTabs();
        renderControls();
        updateMechanismLabels();
    });

    refs.controlGroup.addEventListener("input", (event) => {
        const input = event.target.closest("input[data-key]");
        if (!input) {
            return;
        }
        const simulationName = input.dataset.sim;
        const key = input.dataset.key;
        const numericValue = Number(input.value);
        state.controls[simulationName][key] = numericValue;
        const card = input.closest(".control-card");
        if (card) {
            card.querySelector(".control-value").textContent = formatControlValue(input.dataset.unit, numericValue);
        }
        state.elapsed = 0;
    });

    refs.toggleMotion.addEventListener("click", () => {
        state.running = !state.running;
        refs.toggleMotion.textContent = state.running ? "Pause motion" : "Resume motion";
        refs.motionState.textContent = state.running ? "Running" : "Paused";
    });

    refs.resetMotion.addEventListener("click", () => {
        state.elapsed = 0;
    });

    refs.randomizeValues.addEventListener("click", () => {
        const simulation = simulations[state.activeSimulation];
        simulation.controls.forEach((control) => {
            const randomValue = randomInRange(control.min, control.max, control.step);
            state.controls[state.activeSimulation][control.key] = randomValue;
        });
        state.elapsed = 0;
        renderControls();
    });

    refs.clearFilters.addEventListener("click", () => {
        state.query = "";
        state.topic = "All";
        refs.paperSearch.value = "";
        renderTopicFilters();
        renderPaperGrid();
        renderChallenge();
    });

    refs.surpriseMe.addEventListener("click", () => {
        const bank = getFilteredPapers().length ? getFilteredPapers() : papers;
        const paper = bank[Math.floor(Math.random() * bank.length)];
        state.activePaperId = paper.id;
        state.challengePaperId = paper.id;
        renderPaperGrid();
        renderSpotlight();
        renderChallenge();
        document.getElementById("papers").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    refs.newChallenge.addEventListener("click", () => {
        const bank = getFilteredPapers().length ? getFilteredPapers() : papers;
        const paper = bank[Math.floor(Math.random() * bank.length)];
        state.challengePaperId = paper.id;
        renderChallenge();
    });

    window.addEventListener("resize", resizeCanvas);
}

function renderTopicFilters() {
    refs.topicFilters.innerHTML = topicNames
        .map(
            (topic) => `
                <button
                    class="filter-chip ${topic === state.topic ? "is-active" : ""}"
                    data-topic="${escapeHtml(topic)}"
                    type="button"
                >
                    ${escapeHtml(topic)}
                </button>
            `
        )
        .join("");
}

function renderPaperGrid() {
    const filtered = getFilteredPapers();
    if (!filtered.length) {
        refs.paperGrid.innerHTML = `
            <div class="empty-state">
                No papers match that search yet. Clear the filters and try a wider topic or keyword.
            </div>
        `;
        refs.paperCount.textContent = "0";
        refs.completedCount.textContent = String(state.completed.size);
        refs.spotlightTitle.textContent = "No paper selected";
        refs.spotlightMeta.textContent = "Adjust the filters to bring papers back into view.";
        refs.spotlightPrompt.textContent = "The spotlight updates automatically once the result list has at least one paper again.";
        refs.spotlightTargets.innerHTML = "";
        refs.spotlightFormula.textContent = "No formula available";
        refs.spotlightTip.textContent = "Try clearing the search field or switching the topic filter back to All.";
        refs.toggleComplete.disabled = true;
        refs.loadMechanism.disabled = true;
        return;
    }

    if (!filtered.some((paper) => paper.id === state.activePaperId)) {
        state.activePaperId = filtered[0].id;
    }

    refs.paperGrid.innerHTML = filtered
        .map((paper) => {
            const completed = state.completed.has(paper.id);
            return `
                <button
                    class="paper-card ${paper.id === state.activePaperId ? "is-active" : ""} ${completed ? "is-complete" : ""}"
                    data-paper-id="${paper.id}"
                    type="button"
                >
                    <div class="paper-topline">
                        <span class="paper-code">${paper.code} • ${paper.session}</span>
                        <span class="paper-difficulty">${paper.difficulty}</span>
                    </div>
                    <h3>${escapeHtml(paper.title)}</h3>
                    <p class="paper-copy">${escapeHtml(paper.prompt)}</p>
                    <div class="tag-list" aria-hidden="true">
                        ${paper.focus.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
                    </div>
                    <div class="paper-bottomline">
                        <span>${escapeHtml(paper.topic)} • ${escapeHtml(paper.paperType)}</span>
                        <span class="paper-status">${completed ? "Revised" : simulations[paper.mechanism].label}</span>
                    </div>
                </button>
            `;
        })
        .join("");

    refs.paperCount.textContent = String(filtered.length);
    refs.completedCount.textContent = String(state.completed.size);
    refs.toggleComplete.disabled = false;
    refs.loadMechanism.disabled = false;
    renderSpotlight();
}

function renderSpotlight() {
    const paper = getPaper(state.activePaperId);
    refs.spotlightTitle.textContent = paper.title;
    refs.spotlightMeta.textContent = `${paper.code} • ${paper.session} • ${paper.paperType} • ${paper.topic}`;
    refs.spotlightPrompt.textContent = paper.prompt;
    refs.spotlightTargets.innerHTML = paper.focus.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");
    refs.spotlightFormula.textContent = paper.formula;
    refs.spotlightTip.textContent = paper.tip;
    refs.toggleComplete.textContent = state.completed.has(paper.id) ? "Mark as not revised" : "Mark as revised";
}

function renderSimulationTabs() {
    refs.simTabs.innerHTML = simulationKeys
        .map((key) => {
            const simulation = simulations[key];
            return `
                <button class="sim-tab ${key === state.activeSimulation ? "is-active" : ""}" data-sim="${key}" type="button">
                    <strong>${simulation.label}</strong>
                    <span>${simulation.description}</span>
                </button>
            `;
        })
        .join("");

    updateMechanismLabels();
}

function renderControls() {
    const simulation = simulations[state.activeSimulation];
    refs.controlGroup.innerHTML = simulation.controls
        .map((control) => {
            const value = state.controls[state.activeSimulation][control.key];
            return `
                <div class="control-card">
                    <div class="control-head">
                        <strong>${escapeHtml(control.label)}</strong>
                        <span class="control-value">${formatControlValue(control.unit, value)}</span>
                    </div>
                    <input
                        type="range"
                        data-sim="${state.activeSimulation}"
                        data-key="${control.key}"
                        data-unit="${control.unit}"
                        min="${control.min}"
                        max="${control.max}"
                        step="${control.step}"
                        value="${value}"
                    >
                    <div class="control-meta">${control.min} to ${control.max} ${control.unit}</div>
                </div>
            `;
        })
        .join("");
}

function renderChallenge() {
    const available = getFilteredPapers();
    if (!available.length) {
        refs.challengeCard.innerHTML = "<p>No challenge available until the filter returns at least one paper.</p>";
        return;
    }

    if (!available.some((paper) => paper.id === state.challengePaperId)) {
        state.challengePaperId = available[0].id;
    }

    const paper = getPaper(state.challengePaperId);
    refs.challengeCard.innerHTML = `
        <p class="spotlight-kicker">${paper.session} • ${paper.paperType}</p>
        <h4>${escapeHtml(paper.title)}</h4>
        <p>${escapeHtml(paper.prompt)}</p>
        <div class="challenge-pill-row">
            <span class="challenge-pill">${escapeHtml(paper.topic)}</span>
            <span class="challenge-pill">${escapeHtml(simulations[paper.mechanism].label)}</span>
            <span class="challenge-pill">${escapeHtml(paper.difficulty)}</span>
        </div>
    `;
}

function updateMechanismLabels() {
    const simulation = simulations[state.activeSimulation];
    refs.activeMechanismBadge.textContent = simulation.label;
    refs.simulationDescription.textContent = simulation.description;

    const linkedPaper = getPaper(state.linkedPaperId);
    refs.linkedPaperCode.textContent = linkedPaper ? linkedPaper.code : "Custom mode";
    refs.linkedPaperPrompt.textContent = linkedPaper ? linkedPaper.prompt : "No linked paper yet.";
}

function applyPaperPreset(paper, shouldScroll) {
    state.activeSimulation = paper.mechanism;
    state.controls[paper.mechanism] = {
        ...state.controls[paper.mechanism],
        ...paper.simPreset
    };
    state.linkedPaperId = paper.id;
    state.elapsed = 0;
    renderSimulationTabs();
    renderControls();
    updateMechanismLabels();
    if (shouldScroll) {
        document.getElementById("lab").scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function getFilteredPapers() {
    return papers.filter((paper) => {
        const matchesTopic = state.topic === "All" || paper.topic === state.topic;
        if (!matchesTopic) {
            return false;
        }
        if (!state.query) {
            return true;
        }
        const haystack = [
            paper.code,
            paper.session,
            paper.paperType,
            paper.topic,
            paper.title,
            paper.prompt,
            paper.formula,
            ...paper.focus,
            simulations[paper.mechanism].label
        ]
            .join(" ")
            .toLowerCase();
        return haystack.includes(state.query);
    });
}

function frame(timestamp) {
    if (!state.lastFrame) {
        state.lastFrame = timestamp;
    }
    const delta = Math.min((timestamp - state.lastFrame) / 1000, 0.033);
    state.lastFrame = timestamp;
    if (state.running) {
        state.elapsed += delta;
    }
    drawCurrentSimulation();
    requestAnimationFrame(frame);
}

function drawCurrentSimulation() {
    const simulation = simulations[state.activeSimulation];
    const values = state.controls[state.activeSimulation];
    const size = getCanvasSize();
    const result = simulation.draw(ctx, size, values, state.elapsed);
    refs.canvasCaption.textContent = result.caption;
    renderReadouts(result.readouts);
}

function renderReadouts(readouts) {
    const currentCards = refs.readoutGrid.querySelectorAll(".readout-card");
    if (currentCards.length !== readouts.length) {
        refs.readoutGrid.innerHTML = readouts
            .map(
                (item) => `
                    <div class="readout-card">
                        <span class="readout-label"></span>
                        <span class="readout-value"></span>
                    </div>
                `
            )
            .join("");
    }

    Array.from(refs.readoutGrid.children).forEach((card, index) => {
        card.querySelector(".readout-label").textContent = readouts[index].label;
        card.querySelector(".readout-value").textContent = readouts[index].value;
    });
}

function resizeCanvas() {
    const bounds = refs.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    refs.canvas.width = Math.floor(bounds.width * dpr);
    refs.canvas.height = Math.floor(bounds.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function getCanvasSize() {
    return {
        width: refs.canvas.width / (Math.min(window.devicePixelRatio || 1, 2)),
        height: refs.canvas.height / (Math.min(window.devicePixelRatio || 1, 2))
    };
}

function paintCanvasBase(ctx2d, width, height, accentColor) {
    const gradient = ctx2d.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "rgba(17, 34, 59, 0.92)");
    gradient.addColorStop(1, "rgba(5, 12, 23, 0.98)");
    ctx2d.clearRect(0, 0, width, height);
    ctx2d.fillStyle = gradient;
    ctx2d.fillRect(0, 0, width, height);

    ctx2d.save();
    ctx2d.strokeStyle = "rgba(255,255,255,0.05)";
    ctx2d.lineWidth = 1;
    for (let x = 0; x <= width; x += 42) {
        ctx2d.beginPath();
        ctx2d.moveTo(x, 0);
        ctx2d.lineTo(x, height);
        ctx2d.stroke();
    }
    for (let y = 0; y <= height; y += 42) {
        ctx2d.beginPath();
        ctx2d.moveTo(0, y);
        ctx2d.lineTo(width, y);
        ctx2d.stroke();
    }
    ctx2d.restore();

    ctx2d.save();
    ctx2d.fillStyle = accentColor;
    ctx2d.globalAlpha = 0.08;
    ctx2d.beginPath();
    ctx2d.arc(width * 0.82, height * 0.2, 120, 0, Math.PI * 2);
    ctx2d.fill();
    ctx2d.restore();
}

function drawSpring(ctx2d, x1, x2, y, coils, amplitude) {
    ctx2d.save();
    ctx2d.strokeStyle = "rgba(255, 255, 255, 0.85)";
    ctx2d.lineWidth = 4;
    ctx2d.beginPath();
    ctx2d.moveTo(x1, y);
    const length = x2 - x1;
    const lead = 24;
    ctx2d.lineTo(x1 + lead, y);
    for (let i = 0; i < coils; i += 1) {
        const progress = i / coils;
        const nextProgress = (i + 1) / coils;
        const currentX = x1 + lead + (progress * (length - (lead * 2)));
        const nextX = x1 + lead + (nextProgress * (length - (lead * 2)));
        const peakY = y + (i % 2 === 0 ? -amplitude : amplitude);
        ctx2d.quadraticCurveTo((currentX + nextX) / 2, peakY, nextX, y);
    }
    ctx2d.lineTo(x2, y);
    ctx2d.stroke();
    ctx2d.restore();
}

function drawCanvasLabel(ctx2d, x, y, text) {
    ctx2d.save();
    ctx2d.fillStyle = "rgba(255,255,255,0.85)";
    ctx2d.font = "600 14px Trebuchet MS";
    ctx2d.fillText(text, x, y);
    ctx2d.restore();
}

function observeReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function animateHeroMetrics(shouldAnimate) {
    setMetric(refs.papersMetric, papers.length, shouldAnimate);
    setMetric(refs.topicsMetric, topicNames.length - 1, shouldAnimate);
    setMetric(refs.mechanismMetric, simulationKeys.length, shouldAnimate);
    setMetric(refs.revisedMetric, state.completed.size, shouldAnimate);
}

function setMetric(element, target, shouldAnimate) {
    if (!shouldAnimate) {
        element.textContent = String(target);
        return;
    }

    const duration = 900;
    const start = performance.now();
    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        element.textContent = String(Math.round(target * easeOutCubic(progress)));
        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    }
    requestAnimationFrame(tick);
}

function loadProgress() {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return;
        }
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.completed)) {
            state.completed = new Set(parsed.completed.filter((id) => papers.some((paper) => paper.id === id)));
        }
    } catch (error) {
        console.warn("Could not load saved progress.", error);
    }
}

function saveProgress() {
    try {
        window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                completed: [...state.completed]
            })
        );
    } catch (error) {
        console.warn("Could not save progress.", error);
    }
}

function getPaper(id) {
    return papers.find((paper) => paper.id === id) || papers[0];
}

function formatControlValue(unit, value) {
    const digits = Math.abs(value) >= 10 || Number.isInteger(value) ? 0 : 2;
    const formatted = formatNumber(value, digits);
    return unit ? `${formatted} ${unit}` : formatted;
}

function formatNumber(value, digits) {
    return Number(value).toFixed(digits);
}

function randomInRange(min, max, step) {
    const steps = Math.round((max - min) / step);
    return Number((min + (Math.floor(Math.random() * (steps + 1)) * step)).toFixed(4));
}

function easeOutCubic(value) {
    return 1 - Math.pow(1 - value, 3);
}

function mapRange(value, inMin, inMax, outMin, outMax) {
    const progress = (value - inMin) / (inMax - inMin);
    return outMin + (progress * (outMax - outMin));
}

function degToRad(value) {
    return (value * Math.PI) / 180;
}

function radToDeg(value) {
    return (value * 180) / Math.PI;
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function clone(value) {
    return JSON.parse(JSON.stringify(value));
}

function roundRect(ctx2d, x, y, width, height, radius) {
    ctx2d.beginPath();
    ctx2d.moveTo(x + radius, y);
    ctx2d.lineTo(x + width - radius, y);
    ctx2d.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx2d.lineTo(x + width, y + height - radius);
    ctx2d.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx2d.lineTo(x + radius, y + height);
    ctx2d.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx2d.lineTo(x, y + radius);
    ctx2d.quadraticCurveTo(x, y, x + radius, y);
    ctx2d.closePath();
}

init();
