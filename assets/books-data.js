const books = [
  {
    "title": "101 Tough Conversations to Have with Employees: A Manager's Guide to Addressing Performance, Conduct, and Discipline Challenges",
    "shortTitle": "101 Tough Conversations to Have with...",
    "path": "web/Managing People/101 Tough Conversations to Have with Employees: A Manager's Guide to Addressing Performance, Conduct, and Discipline Challenges.html",
    "category": "Leadership & Management",
    "description": "A practical guide for managers on handling difficult employee conversations regarding performance, conduct, and discipline."
  },
  {
    "title": "50 Business Models of the New Economy",
    "shortTitle": "50 Business Models of the New Economy",
    "path": "web/50 Business Models of the New Economy.html",
    "category": "Business Strategy",
    "description": "Explores 50 innovative business models driving success in the modern economy."
  },
  {
    "title": "Blue Ocean Strategy, Expanded Edition",
    "shortTitle": "Blue Ocean Strategy, Expanded Edition",
    "path": "web/Blue Ocean Strategy, Expanded Edition.html",
    "category": "Business Strategy",
    "description": "A seminal work on creating uncontested market space and making competition irrelevant."
  },
  {
    "title": "Born Rich: Maximizing Your Awesome Potential",
    "shortTitle": "Born Rich: Maximizing Your Awesome...",
    "path": "web/Born Rich: Maximizing Your Awesome Potential.html",
    "category": "Personal Development",
    "description": "A motivational book about unlocking your potential for success and wealth."
  },
  {
    "title": "Design Thinking in Business and IT: Overview, Techniques and Example Workshop",
    "shortTitle": "Design Thinking in Business and IT:...",
    "path": "web/Design Thinking in Business and IT: Overview, Techniques and Example Workshop.html",
    "category": "Design Thinking & Innovation",
    "description": "A guide to applying design thinking principles in business and IT contexts."
  },
  {
    "title": "Disciplined Entrepreneurship",
    "shortTitle": "Disciplined Entrepreneurship",
    "path": "web/Disciplined Entrepreneurship.html",
    "category": "Entrepreneurship",
    "description": "A structured approach to building successful startups with practical steps."
  },
  {
    "title": "First, Break All the Rules: What the World's Greatest Managers Do Differently",
    "shortTitle": "First, Break All the Rules: What the...",
    "path": "web/First, Break All the Rules: What the World's Greatest Managers Do Differently.html",
    "category": "Leadership & Management",
    "description": "Insights from top managers on breaking conventional rules to enhance team performance."
  },
  {
    "title": "Homeless to Billionaire: The 18 Principles of Wealth Attraction and Creating Unlimited Opportunity",
    "shortTitle": "Homeless to Billionaire: The 18...",
    "path": "web/Homeless to Billionaire: The 18 Principles of Wealth Attraction and Creating Unlimited Opportunity.html",
    "category": "Personal Finance & Wealth",
    "description": "A guide to wealth-building principles based on the author’s journey from homelessness to success."
  },
  {
    "title": "How to Make Your First Million",
    "shortTitle": "How to Make Your First Million",
    "path": "web/How to Make Your First Million.html",
    "category": "Personal Finance & Wealth",
    "description": "Practical strategies for achieving millionaire status."
  },
  {
    "title": "How to Manage People: 7 Easy Steps to Master Management Skills, Managing Difficult Employees, Delegation & Team Management (Leadership Skills Book 2)",
    "shortTitle": "How to Manage People: 7 Easy Steps to...",
    "path": "web/Managing People/How to Manage People: 7 Easy Steps to Master Management Skills, Managing Difficult Employees, Delegation & Team Management (Leadership Skills Book 2).html",
    "category": "Leadership & Management",
    "description": "A step-by-step guide to mastering management skills and handling difficult employees."
  },
  {
    "title": "How to Think About Money Jonathan Clements",
    "shortTitle": "How to Think About Money Jonathan...",
    "path": "web/How to Think About Money Jonathan Clements.html",
    "category": "Personal Finance & Wealth",
    "description": "A thoughtful exploration of personal finance and money management principles."
  },
  {
    "title": "I Will Teach You to Be Rich: No Guilt. No Excuses",
    "shortTitle": "I Will Teach You to Be Rich: No Guilt....",
    "path": "web/I Will Teach You to Be Rich: No Guilt. No Excuses.html",
    "category": "Personal Finance & Wealth",
    "description": "A practical, actionable guide to achieving financial success without guilt."
  },
  {
    "title": "Jobs to Be Done: A Roadmap for Customer-Centered Innovation",
    "shortTitle": "Jobs to Be Done: A Roadmap for Customer...",
    "path": "web/Jobs to Be Done: A Roadmap for Customer-Centered Innovation.html",
    "category": "Business Strategy",
    "description": "A framework for innovation based on understanding customer needs and jobs-to-be-done."
  },
  {
    "title": "Man vs. Markets: Economics Explained (Plain and Simple)",
    "shortTitle": "Man vs. Markets: Economics Explained...",
    "path": "web/Man vs. Markets: Economics Explained (Plain and Simple).html",
    "category": "Economics",
    "description": "A straightforward explanation of economic principles and market dynamics."
  },
  {
    "title": "Million-Dollar Habits",
    "shortTitle": "Million-Dollar Habits",
    "path": "web/Million-Dollar Habits.html",
    "category": "Personal Development",
    "description": "Habits and routines to cultivate success and wealth."
  },
  {
    "title": "Millionaire Mission: A 9-Step System to Level Up Your Finances and Build Wealth",
    "shortTitle": "Millionaire Mission: A 9-Step System to...",
    "path": "web/Millionaire Mission: A 9-Step System to Level Up Your Finances and Build Wealth.html",
    "category": "Personal Finance & Wealth",
    "description": "A 9-step system to improve finances and build long-term wealth."
  },
  {
    "title": "Multipliers, Revised and Updated: How the Best Leaders Make Everyone Smarter",
    "shortTitle": "Multipliers, Revised and Updated: How...",
    "path": "web/Multipliers, Revised and Updated: How the Best Leaders Make Everyone Smarter.html",
    "category": "Leadership & Management",
    "description": "How exceptional leaders amplify the intelligence and capabilities of their teams."
  },
  {
    "title": "Nine-Figure Mindset: How to Go from Zero to Over $100 Million in Net Worth",
    "shortTitle": "Nine-Figure Mindset: How to Go from Zero...",
    "path": "web/Nine-Figure Mindset: How to Go from Zero to Over $100 Million in Net Worth.html",
    "category": "Personal Finance & Wealth",
    "description": "A mindset guide to achieving extraordinary wealth."
  },
  {
    "title": "Plan Your Year Like a Millionaire",
    "shortTitle": "Plan Your Year Like a Millionaire",
    "path": "web/Plan Your Year Like a Millionaire.html",
    "category": "Personal Development",
    "description": "A planning guide to achieving success and wealth through structured goals."
  },
  {
    "title": "Rich Dad's Guide to Financial Freedom",
    "shortTitle": "Rich Dad's Guide to Financial Freedom",
    "path": "web/Rich Dad's Guide to Financial Freedom.html",
    "category": "Personal Finance & Wealth",
    "description": "Lessons from the Rich Dad series on achieving financial independence."
  },
  {
    "title": "Start with Why: How Great Leaders Inspire Everyone to Take Action",
    "shortTitle": "Start with Why: How Great Leaders...",
    "path": "web/Start with Why: How Great Leaders Inspire Everyone to Take Action.html",
    "category": "Leadership & Management",
    "description": "A leadership book on inspiring action by starting with purpose."
  },
  {
    "title": "Start. Scale. Exit. Repeat.: Serial Entrepreneurs' Secrets Revealed",
    "shortTitle": "Start. Scale. Exit. Repeat.: Serial...",
    "path": "web/Start. Scale. Exit. Repeat.: Serial Entrepreneurs' Secrets Revealed.html",
    "category": "Entrepreneurship",
    "description": "Secrets from serial entrepreneurs on building and exiting successful businesses."
  },
  {
    "title": "Starting a Business QuickStart Guide",
    "shortTitle": "Starting a Business QuickStart Guide",
    "path": "web/Starting a Business QuickStart Guide.html",
    "category": "Entrepreneurship",
    "description": "A beginner’s guide to launching a business with practical steps."
  },
  {
    "title": "Testing Business Model",
    "shortTitle": "Testing Business Model",
    "path": "web/Testing Business Model.html",
    "category": "Business Strategy",
    "description": "Strategies for testing and validating business models."
  },
  {
    "title": "The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich",
    "shortTitle": "The 4-Hour Workweek: Escape 9-5, Live...",
    "path": "web/The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich.html",
    "category": "Personal Development",
    "description": "A guide to designing a life of freedom and wealth through efficiency."
  },
  {
    "title": "The 80-20 CEO",
    "shortTitle": "The 80-20 CEO",
    "path": "web/The 80-20 CEO.html",
    "category": "Leadership & Management",
    "description": "Applying the 80/20 principle to leadership and business success."
  },
  {
    "title": "The Elements of Investing",
    "shortTitle": "The Elements of Investing",
    "path": "web/The Elements of Investing.html",
    "category": "Investing",
    "description": "Core principles of successful investing for beginners and experts alike."
  },
  {
    "title": "The Entrepreneur's Playbook: More Than 100 Proven Strategies, Tips, and Techniques to Build a Radically Successful Business",
    "shortTitle": "The Entrepreneur's Playbook: More Than...",
    "path": "web/The Entrepreneur's Playbook: More Than 100 Proven Strategies, Tips, and Techniques to Build a Radically Successful Business.html",
    "category": "Entrepreneurship",
    "description": "A comprehensive guide with over 100 strategies for entrepreneurial success."
  },
  {
    "title": "The Four Pillars of Investing: Lessons for Building a Winning Portfolio",
    "shortTitle": "The Four Pillars of Investing: Lessons...",
    "path": "web/The Four Pillars of Investing: Lessons for Building a Winning Portfolio.html",
    "category": "Investing",
    "description": "Key lessons for constructing a successful investment portfolio."
  },
  {
    "title": "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers",
    "shortTitle": "The Hard Thing About Hard Things:...",
    "path": "web/The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers.html",
    "category": "Entrepreneurship",
    "description": "Real-world advice on managing a business through tough challenges."
  },
  {
    "title": "The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail",
    "shortTitle": "The Innovator's Dilemma: When New...",
    "path": "web/The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail.html",
    "category": "Business Strategy",
    "description": "A classic on how disruptive innovation impacts established companies."
  },
  {
    "title": "The Intelligent Investor",
    "shortTitle": "The Intelligent Investor",
    "path": "web/The Intelligent Investor.html",
    "category": "Investing",
    "description": "A timeless guide to value investing by Benjamin Graham."
  },
  {
    "title": "The Introverted Leader: Building on Your Quiet Strength",
    "shortTitle": "The Introverted Leader: Building on Your...",
    "path": "web/The Introverted Leader: Building on Your Quiet Strength.html",
    "category": "Leadership & Management",
    "description": "How introverted leaders can leverage their strengths to succeed."
  },
  {
    "title": "The Invincible Company",
    "shortTitle": "The Invincible Company",
    "path": "web/The Invincible Company.html",
    "category": "Business Strategy",
    "description": "Strategies for building resilient, innovative companies."
  },
  {
    "title": "The Lean Startup",
    "shortTitle": "The Lean Startup",
    "path": "web/The Lean Startup.html",
    "category": "Entrepreneurship",
    "description": "A methodology for building startups with minimal waste."
  },
  {
    "title": "The Millionaire Next Door",
    "shortTitle": "The Millionaire Next Door",
    "path": "web/The Millionaire Next Door.html",
    "category": "Personal Finance & Wealth",
    "description": "Insights into the habits and lifestyles of everyday millionaires."
  },
  {
    "title": "The Mom Test: How to Talk to Customers & Learn If Your Business Is a Good Idea When Everyone Is Lying to You",
    "shortTitle": "The Mom Test: How to Talk to Customers &...",
    "path": "web/The Mom Test: How to Talk to Customers & Learn If Your Business Is a Good Idea When Everyone Is Lying to You.html",
    "category": "Entrepreneurship",
    "description": "A guide to validating business ideas through effective customer interviews."
  },
  {
    "title": "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness",
    "shortTitle": "The Psychology of Money: Timeless...",
    "path": "web/The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness.html",
    "category": "Personal Finance & Wealth",
    "description": "Explores the behavioral psychology behind money and wealth."
  },
  {
    "title": "The Richest Man in Babylon",
    "shortTitle": "The Richest Man in Babylon",
    "path": "web/The Richest Man in Babylon.html",
    "category": "Personal Finance & Wealth",
    "description": "Timeless financial wisdom told through parables set in ancient Babylon."
  },
  {
    "title": "The SaaS Playbook",
    "shortTitle": "The SaaS Playbook",
    "path": "web/The SaaS Playbook.html",
    "category": "Entrepreneurship",
    "description": "A guide to building and scaling Software-as-a-Service businesses."
  },
  {
    "title": "The Science of Getting Rich",
    "shortTitle": "The Science of Getting Rich",
    "path": "web/The Science of Getting Rich.html",
    "category": "Personal Finance & Wealth",
    "description": "A classic on the mental and practical steps to wealth creation."
  },
  {
    "title": "The Service Startup: Design Thinking Gets Lean",
    "shortTitle": "The Service Startup: Design Thinking...",
    "path": "web/The Service Startup: Design Thinking Gets Lean.html",
    "category": "Design Thinking & Innovation",
    "description": "Combines design thinking and lean principles for service-based startups."
  },
  {
    "title": "The Startup Owner's Manual",
    "shortTitle": "The Startup Owner's Manual",
    "path": "web/The Startup Owner's Manual.html",
    "category": "Entrepreneurship",
    "description": "A comprehensive guide to starting and scaling a startup."
  },
  {
    "title": "The Wealth Mindset: Understanding the Mental Path to Wealth",
    "shortTitle": "The Wealth Mindset: Understanding the...",
    "path": "web/The Wealth Mindset: Understanding the Mental Path to Wealth.html",
    "category": "Personal Finance & Wealth",
    "description": "Explores the psychological foundations of building wealth."
  },
  {
    "title": "Think Like A CEO: Stop reacting, get out of your own head and take control of your role (The Effective CEO)",
    "shortTitle": "Think Like A CEO: Stop reacting, get out...",
    "path": "web/Think Like A CEO: Stop reacting, get out of your own head and take control of your role (The Effective CEO).html",
    "category": "Leadership & Management",
    "description": "A guide to proactive leadership and mastering the CEO role."
  },
  {
    "title": "Think and Grow Rich",
    "shortTitle": "Think and Grow Rich",
    "path": "web/Think and Grow Rich.html",
    "category": "Personal Development",
    "description": "A classic on the mindset and habits for achieving success."
  },
  {
    "title": "Traction: Get a Grip on Your Business",
    "shortTitle": "Traction: Get a Grip on Your Business",
    "path": "web/Traction: Get a Grip on Your Business.html",
    "category": "Entrepreneurship",
    "description": "A system for gaining control and scaling a business effectively."
  },
  {
    "title": "What Makes Great Managers Great: How to Raise Engagement, Give Feedback, and Answer the Questions No One’s Asking",
    "shortTitle": "What Makes Great Managers Great: How to...",
    "path": "web/Managing People/What Makes Great Managers Great: How to Raise Engagement, Give Feedback, and Answer the Questions No One’s Asking.html",
    "category": "Leadership & Management",
    "description": "Strategies for managers to boost engagement and team performance."
  },
  {
    "title": "What You Think of Me Is None of My Business",
    "shortTitle": "What You Think of Me Is None of My...",
    "path": "web/What You Think of Me Is None of My Business.html",
    "category": "Personal Development",
    "description": "A book on self-empowerment and letting go of others’ opinions."
  },
  {
    "title": "Your Next Five Moves: Master the Art of Business Strategy",
    "shortTitle": "Your Next Five Moves: Master the Art of...",
    "path": "web/Your Next Five Moves: Master the Art of Business Strategy.html",
    "category": "Business Strategy",
    "description": "A strategic guide to planning and executing business moves."
  },
  {
    "title": "business model",
    "shortTitle": "business model",
    "path": "web/business model.html",
    "category": "Business Strategy",
    "description": "Explores frameworks for developing effective business models."
  },
  {
    "title": "Rich Dad Poor Dad",
    "shortTitle": "Rich Dad Poor Dad",
    "path": "web/rich dad_poor_dad.html",
    "category": "Personal Finance & Wealth",
    "description": "A foundational book on financial education and wealth-building."
  },
  {
    "title": "How to Manage Problem Employees: A Step-by-Step Guide for Turning Difficult Employees into High Performers",
    "shortTitle": "How to Manage Problem Employees: A Step...",
    "path": "web/Managing People/How to Manage Problem Employees: A Step-by-Step Guide for Turning Difficult Employees into High Performers.html",
    "category": "Leadership & Management",
    "description": "A practical guide to transforming challenging employees into assets."
  },
  {
    "title": "Value Proposition Design",
    "shortTitle": "Value Proposition Design",
    "path": "web/Value Proposition Design.html",
    "category": "Design Thinking & Innovation",
    "description": "A guide to designing compelling value propositions for customers."
  },
  {
    "title": "Bad Employees",
    "shortTitle": "Bad Employees",
    "path": "web/Managing People/Bad Employees.html",
    "category": "Leadership & Management",
    "description": "Strategies for managing and improving problematic employees."
  },
  {
    "title": "Dealing With Difficult People 1st Edition by Dr. Rick Brinkman",
    "shortTitle": "Dealing With Difficult People 1st...",
    "path": "web/Managing People/Dealing With Difficult People 1st Edition by Dr. Rick Brinkman.html",
    "category": "Leadership & Management",
    "description": "Techniques for handling difficult personalities in the workplace."
  },
  {
    "title": "Dealing with People You Can’t Stand, Revised and Expanded Third Edition: How to Bring Out the Best in People at Their Worst",
    "shortTitle": "Dealing with People You Can’t Stand,...",
    "path": "web/Managing People/Dealing with People You Can’t Stand, Revised and Expanded Third Edition: How to Bring Out the Best in People at Their Worst.html",
    "category": "Leadership & Management",
    "description": "A guide to managing difficult people and improving relationships."
  },
  {
    "title": "Leading the Unleadable: How to Manage Mavericks, Cynics, Divas, and Other Difficult People",
    "shortTitle": "Leading the Unleadable: How to Manage...",
    "path": "web/Managing People/Leading the Unleadable: How to Manage Mavericks, Cynics, Divas, and Other Difficult People.html",
    "category": "Leadership & Management",
    "description": "Leadership tactics for managing challenging personalities."
  },
  {
    "title": "Managing Difficult People in a Week Kindle Edition by David Cotton",
    "shortTitle": "Managing Difficult People in a Week...",
    "path": "web/Managing People/Managing Difficult People in a Week Kindle Edition by David Cotton.html",
    "category": "Leadership & Management",
    "description": "A concise guide to managing difficult employees in a short timeframe."
  },
  {
    "title": "Managing Difficult People: A Survival Guide For Handling Any Employee",
    "shortTitle": "Managing Difficult People: A Survival...",
    "path": "web/Managing People/Managing Difficult People: A Survival Guide For Handling Any Employee.html",
    "category": "Leadership & Management",
    "description": "A survival guide for dealing with all types of difficult employees."
  },
  {
    "title": "Powerful Phrases for Dealing with Difficult People: Over 325 Ready-to-Use Words and Phrases for Working with Challenging Personalities",
    "shortTitle": "Powerful Phrases for Dealing with...",
    "path": "web/Managing People/Powerful Phrases for Dealing with Difficult People: Over 325 Ready-to-Use Words and Phrases for Working with Challenging Personalities.html",
    "category": "Leadership & Management",
    "description": "Practical phrases for navigating tough workplace interactions."
  },
  {
    "title": "96 Great Interview Questions to Ask Before You Hire",
    "shortTitle": "96 Great Interview Questions to Ask...",
    "path": "web/Managing People/96 Great Interview Questions to Ask Before You Hire.html",
    "category": "Leadership & Management",
    "description": "A resource for hiring managers to select the best candidates."
  },
  {
    "title": "Build: An Unorthodox Guide to Making Things Worth Making",
    "shortTitle": "Build: An Unorthodox Guide to Making...",
    "path": "web/Build: An Unorthodox Guide to Making Things Worth Making.html",
    "category": "Entrepreneurship",
    "description": "An unconventional guide to creating meaningful products and businesses."
  },
  {
    "title": "Nexus: A Brief History of Information Networks from the Stone Age to AI",
    "shortTitle": "Nexus: A Brief History of Information...",
    "path": "web/Nexus: A Brief History of Information Networks from the Stone Age to AI.html",
    "category": "Technology",
    "description": "A historical overview of information networks from ancient times to AI."
  },
  {
    "title": "Originals: How Non-Conformists Move the World",
    "shortTitle": "Originals: How Non-Conformists Move the...",
    "path": "web/Originals: How Non-Conformists Move the World.html",
    "category": "Psychology & Mindset",
    "description": "Explores how unconventional thinkers drive innovation and change."
  },
  {
    "title": "Right Thing, Right Now: Good Values. Good Character. Good Deeds",
    "shortTitle": "Right Thing, Right Now: Good Values....",
    "path": "web/Right Thing, Right Now: Good Values. Good Character. Good Deeds.html",
    "category": "Personal Development",
    "description": "A guide to living with integrity and purpose."
  },
  {
    "title": "The 12 Week Year: Get More Done in 12 Weeks than Others Do in 12 Months",
    "shortTitle": "The 12 Week Year: Get More Done in 12...",
    "path": "web/The 12 Week Year: Get More Done in 12 Weeks than Others Do in 12 Months.html",
    "category": "Personal Development",
    "description": "A productivity system to achieve more in less time."
  },
  {
    "title": "The Art Of Game Theory",
    "shortTitle": "The Art Of Game Theory",
    "path": "web/The Art Of Game Theory.html",
    "category": "Business Strategy",
    "description": "An exploration of game theory applications in business and decision-making."
  },
  {
    "title": "Valuepreneurs",
    "shortTitle": "Valuepreneurs",
    "path": "web/Valuepreneurs.html",
    "category": "Entrepreneurship",
    "description": "A guide for entrepreneurs focused on creating value-driven businesses."
  },
  {
    "title": "101 Sample Write-Ups for Documenting Employee Performance Problems: A Guide to Progressive Discipline and Termination",
    "shortTitle": "101 Sample Write-Ups for Documenting...",
    "path": "web/Managing People/101 Sample Write-Ups for Documenting Employee Performance Problems: A Guide to Progressive Discipline and Termination (A Guide to Progressive Discipline & Termination).html",
    "category": "Leadership & Management",
    "description": "A resource for documenting and addressing employee performance issues."
  },
  {
    "title": "Bad Apples: How to Manage Difficult Employees, Encourage Good Ones to Stay, and Boost Productivity",
    "shortTitle": "Bad Apples: How to Manage Difficult...",
    "path": "web/Managing People/Bad Apples: How to Manage Difficult Employees, Encourage Good Ones to Stay, and Boost Productivity.html",
    "category": "Leadership & Management",
    "description": "Strategies for managing difficult employees while retaining top talent."
  },
  {
    "title": "Be Obsessed or Be Average",
    "shortTitle": "Be Obsessed or Be Average",
    "path": "web/Be Obsessed or Be Average.html",
    "category": "Personal Development",
    "description": "A motivational call to pursue excellence with relentless focus."
  },
  {
    "title": "Be Your Future Self Now: The Science of Intentional Transformation",
    "shortTitle": "Be Your Future Self Now: The Science of...",
    "path": "web/Be Your Future Self Now: The Science of Intentional Transformation.html",
    "category": "Personal Development",
    "description": "A science-based approach to intentional self-transformation."
  },
  {
    "title": "Become a Studying and Learning Machine: Strategies For the Top of the Class, Promotions, and Smashing Your Goals",
    "shortTitle": "Become a Studying and Learning Machine:...",
    "path": "web/Become a Studying and Learning Machine: Strategies For the Top of the Class, Promotions, and Smashing Your Goals (Learning how to Learn Book 27).html",
    "category": "Personal Development",
    "description": "Techniques to excel in learning and achieving personal goals."
  },
  {
    "title": "Building a Second Brain: A Proven Method to Organize Your Digital Life and Unlock Your Creative Potential",
    "shortTitle": "Building a Second Brain: A Proven Method...",
    "path": "web/Building a Second Brain: A Proven Method to Organize Your Digital Life and Unlock Your Creative Potential.html",
    "category": "Personal Development",
    "description": "A system for organizing digital information to boost creativity."
  },
  {
    "title": "Can't Hurt Me: Master Your Mind and Defy the Odds",
    "shortTitle": "Can't Hurt Me: Master Your Mind and Defy...",
    "path": "web/Can't Hurt Me: Master Your Mind and Defy the Odds.html",
    "category": "Personal Development",
    "description": "A story of resilience and mental toughness to overcome challenges."
  },
  {
    "title": "Dealing with Difficult People in Professional Life",
    "shortTitle": "Dealing with Difficult People in...",
    "path": "web/Managing People/Dealing with Difficult People in Professional Life.html",
    "category": "Leadership & Management",
    "description": "Strategies for handling difficult personalities in professional settings."
  },
  {
    "title": "Deep Work: Rules for Focused Success in a Distracted World",
    "shortTitle": "Deep Work: Rules for Focused Success in...",
    "path": "web/Deep Work: Rules for Focused Success in a Distracted World.html",
    "category": "Personal Development",
    "description": "Rules for achieving focused, high-value work in a distracted world."
  },
  {
    "title": "Die Empty: Unleash Your Best Work Every Day",
    "shortTitle": "Die Empty: Unleash Your Best Work Every...",
    "path": "web/Die Empty: Unleash Your Best Work Every Day.html",
    "category": "Personal Development",
    "description": "A call to maximize your potential and output every day."
  },
  {
    "title": "Ego Is the Enemy",
    "shortTitle": "Ego Is the Enemy",
    "path": "web/Ego Is the Enemy.html",
    "category": "Personal Development",
    "description": "How overcoming ego can lead to greater success and fulfillment."
  },
  {
    "title": "Emotional Intelligence Habits",
    "shortTitle": "Emotional Intelligence Habits",
    "path": "web/Emotional Intelligence Habits.html",
    "category": "Personal Development",
    "description": "Habits to build emotional intelligence for personal and professional growth."
  },
  {
    "title": "From Zero to a Successful Solopreneur",
    "shortTitle": "From Zero to a Successful Solopreneur",
    "path": "web/From Zero to a Successful Solopreneur.html",
    "category": "Entrepreneurship",
    "description": "A guide to succeeding as a solo entrepreneur."
  },
  {
    "title": "Hidden Potential: The Science of Achieving Greater Things",
    "shortTitle": "Hidden Potential: The Science of...",
    "path": "web/Hidden Potential: The Science of Achieving Greater Things.html",
    "category": "Personal Development",
    "description": "The science behind unlocking your untapped potential."
  },
  {
    "title": "Hooked: How to Build Habit-Forming Products",
    "shortTitle": "Hooked: How to Build Habit-Forming...",
    "path": "web/Hooked: How to Build Habit-Forming Products.html",
    "category": "Design Thinking & Innovation",
    "description": "A framework for creating products that keep users coming back."
  },
  {
    "title": "How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships",
    "shortTitle": "How to Talk to Anyone: 92 Little Tricks...",
    "path": "web/How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships.html",
    "category": "Personal Development",
    "description": "Techniques for improving communication and relationships."
  },
  {
    "title": "Limitless Mind: Learn, Lead, and Live Without Barriers",
    "shortTitle": "Limitless Mind: Learn, Lead, and Live...",
    "path": "web/Limitless Mind: Learn, Lead, and Live Without Barriers.html",
    "category": "Personal Development",
    "description": "A guide to breaking mental barriers for learning and leadership."
  },
  {
    "title": "Managing Low Performance",
    "shortTitle": "Managing Low Performance",
    "path": "web/Managing People/Managing Low Performance.html",
    "category": "Leadership & Management",
    "description": "Strategies for addressing and improving low employee performance."
  },
  {
    "title": "Managing Low Performance: How to successfully deal with low performing employees and get your team back on track",
    "shortTitle": "Managing Low Performance: How to...",
    "path": "web/Managing People/Managing Low Performance: How to successfully deal with low performing employees and get your team back on track.html",
    "category": "Leadership & Management",
    "description": "A detailed guide to managing low-performing employees effectively."
  },
  {
    "title": "Mastering The Ideation Process",
    "shortTitle": "Mastering The Ideation Process",
    "path": "web/Mastering The Ideation Process.html",
    "category": "Design Thinking & Innovation",
    "description": "Techniques for generating and refining innovative ideas."
  },
  {
    "title": "The 10X Rule: The Only Difference Between Success and Failure",
    "shortTitle": "The 10X Rule: The Only Difference...",
    "path": "web/The 10X Rule: The Only Difference Between Success and Failure.html",
    "category": "Personal Development",
    "description": "A mindset shift to achieve extraordinary results through massive action."
  },
  {
    "title": "The 4 Disciplines of Execution: Revised and Updated: Achieving Your Wildly Important Goals",
    "shortTitle": "The 4 Disciplines of Execution: Revised...",
    "path": "web/The 4 Disciplines of Execution: Revised and Updated: Achieving Your Wildly Important Goals.html",
    "category": "Personal Development",
    "description": "A system for achieving key goals through disciplined execution."
  },
  {
    "title": "The 7 Habits of Highly Effective People",
    "shortTitle": "The 7 Habits of Highly Effective People",
    "path": "web/The 7 Habits of Highly Effective People.html",
    "category": "Personal Development",
    "description": "A classic guide to personal and professional effectiveness."
  },
  {
    "title": "The 80-20 Learner",
    "shortTitle": "The 80-20 Learner",
    "path": "web/The 80-20 Learner.html",
    "category": "Personal Development",
    "description": "Applying the 80/20 rule to learning and personal growth."
  },
  {
    "title": "The Coaching Habit Say Less Ask More and Change the Way You Lead Forever",
    "shortTitle": "The Coaching Habit Say Less Ask More and...",
    "path": "web/The Coaching Habit Say Less Ask More and Change the Way You Lead Forever.html",
    "category": "Leadership & Management",
    "description": "A guide to effective coaching for transformative leadership."
  },
  {
    "title": "The Compound Effect: Multiply Your Success One Simple Step at a Time",
    "shortTitle": "The Compound Effect: Multiply Your...",
    "path": "web/The Compound Effect: Multiply Your Success One Simple Step at a Time.html",
    "category": "Personal Development",
    "description": "How small, consistent actions lead to significant success."
  },
  {
    "title": "The Courage to Be Disliked: How to Free Yourself, Change Your Life, and Achieve Real Happiness",
    "shortTitle": "The Courage to Be Disliked: How to Free...",
    "path": "web/The Courage to Be Disliked: How to Free Yourself, Change Your Life, and Achieve Real Happiness.html",
    "category": "Psychology & Mindset",
    "description": "A psychological approach to living authentically and happily."
  },
  {
    "title": "The Design Thinking Playbook: Mindful Digital Transformation",
    "shortTitle": "The Design Thinking Playbook: Mindful...",
    "path": "web/The Design Thinking Playbook: Mindful Digital Transformation.html",
    "category": "Design Thinking & Innovation",
    "description": "A playbook for applying design thinking to digital transformation."
  },
  {
    "title": "The Mountain Is You: Transforming Self-Sabotage into Self-Mastery",
    "shortTitle": "The Mountain Is You: Transforming Self...",
    "path": "web/The Mountain Is You: Transforming Self-Sabotage into Self-Mastery.html",
    "category": "Personal Development",
    "description": "Overcoming self-sabotage to achieve self-mastery."
  },
  {
    "title": "The Pursuit of Excellence: The Uncommon Behaviors of the World's Most Productive Achievers",
    "shortTitle": "The Pursuit of Excellence: The Uncommon...",
    "path": "web/The Pursuit of Excellence: The Uncommon Behaviors of the World's Most Productive Achievers.html",
    "category": "Personal Development",
    "description": "Behaviors of top achievers to drive personal excellence."
  },
  {
    "title": "The Science of Self-Learning",
    "shortTitle": "The Science of Self-Learning",
    "path": "web/The Science of Self-Learning.html",
    "category": "Personal Development",
    "description": "Scientific principles for effective self-directed learning."
  },
  {
    "title": "Toxic Minds: How to Deal with Difficult People, Disarm Narcissists, and Handle Negative Personalities",
    "shortTitle": "Toxic Minds: How to Deal with Difficult...",
    "path": "web/Managing People/Toxic Minds: How to Deal with Difficult People, Disarm Narcissists, and Handle Negative Personalities.html",
    "category": "Leadership & Management",
    "description": "Strategies for managing toxic personalities in the workplace."
  },
  {
    "title": "atomic_habits",
    "shortTitle": "atomic_habits",
    "path": "web/atomic_habits.html",
    "category": "Personal Development",
    "description": "A guide to building good habits and breaking bad ones through small changes."
  },
  {
    "title": "Dealing with Difficult People (HBR Emotional Intelligence Series)",
    "shortTitle": "Dealing with Difficult People (HBR...",
    "path": "web/Managing People/Dealing with Difficult People (HBR Emotional Intelligence Series).html",
    "category": "Leadership & Management",
    "description": "Emotional intelligence strategies for handling difficult people."
  },
  {
    "title": "Design Thinking For Dummies",
    "shortTitle": "Design Thinking For Dummies",
    "path": "web/Design Thinking For Dummies.html",
    "category": "Design Thinking & Innovation",
    "description": "An accessible introduction to design thinking principles."
  },
  {
    "title": "Design Thinking for Software Engineering: Creating Human-oriented Software-intensive Products and Services",
    "shortTitle": "Design Thinking for Software Engineering...",
    "path": "web/Design Thinking for Software Engineering: Creating Human-oriented Software-intensive Products and Services (Progress in IS).html",
    "category": "Design Thinking & Innovation",
    "description": "Applying design thinking to software engineering for human-centered products."
  },
  {
    "title": "Design Thinking in Software and AI Projects: Proving Ideas Through Rapid Prototyping",
    "shortTitle": "Design Thinking in Software and AI...",
    "path": "web/Design Thinking in Software and AI Projects: Proving Ideas Through Rapid Prototyping.html",
    "category": "Design Thinking & Innovation",
    "description": "Using design thinking and rapid prototyping in software and AI development."
  },
  {
    "title": "Design Thinking: Integrating Innovation, Customer Experience, and Brand Value",
    "shortTitle": "Design Thinking: Integrating Innovation,...",
    "path": "web/Design Thinking: Integrating Innovation, Customer Experience, and Brand Value.html",
    "category": "Design Thinking & Innovation",
    "description": "How design thinking enhances innovation and customer experience."
  },
  {
    "title": "Don’t Believe Everything You Think",
    "shortTitle": "Don’t Believe Everything You Think",
    "path": "web/Don’t Believe Everything You Think.html",
    "category": "Psychology & Mindset",
    "description": "A guide to challenging unhelpful thoughts and beliefs."
  },
  {
    "title": "Elements of Likability: The New Science of Charm, Wit, Small Talk, and Social Intelligence",
    "shortTitle": "Elements of Likability: The New Science...",
    "path": "web/Elements of Likability: The New Science of Charm, Wit, Small Talk, and Social Intelligence (How to be More Likable and Charismatic Book 41).html",
    "category": "Psychology & Mindset",
    "description": "The science of being likable and improving social skills."
  },
  {
    "title": "Solving Problems with Design Thinking: Ten Stories of What Works",
    "shortTitle": "Solving Problems with Design Thinking:...",
    "path": "web/Solving Problems with Design Thinking: Ten Stories of What Works.html",
    "category": "Design Thinking & Innovation",
    "description": "Case studies on solving problems using design thinking."
  },
  {
    "title": "The Design Thinking Playbook",
    "shortTitle": "The Design Thinking Playbook",
    "path": "web/The Design Thinking Playbook.html",
    "category": "Design Thinking & Innovation",
    "description": "A practical guide to implementing design thinking."
  },
  {
    "title": "The Design Thinking Toolbox",
    "shortTitle": "The Design Thinking Toolbox",
    "path": "web/The Design Thinking Toolbox.html",
    "category": "Design Thinking & Innovation",
    "description": "Tools and techniques for applying design thinking."
  },
  {
    "title": "The Introvert’s Edge to Networking: Work the Room. Leverage Social Media. Develop Powerful Connections",
    "shortTitle": "The Introvert’s Edge to Networking: Work...",
    "path": "web/The Introvert’s Edge to Networking: Work the Room. Leverage Social Media. Develop Powerful Connections.html",
    "category": "Personal Development",
    "description": "Networking strategies tailored for introverts."
  },
  {
    "title": "The Psychology of Taking Action: How to Stop Overthinking, Get Motivated, Defeat Your Fears, & Stop Procrastinating",
    "shortTitle": "The Psychology of Taking Action: How to...",
    "path": "web/The Psychology of Taking Action: How to Stop Overthinking, Get Motivated, Defeat Your Fears, & Stop Procrastinating.html",
    "category": "Psychology & Mindset",
    "description": "Psychological insights to overcome procrastination and take action."
  },
  {
    "title": "The Secret by Rhonda Byrne",
    "shortTitle": "The Secret by Rhonda Byrne",
    "path": "web/The Secret by Rhonda Byrne.html",
    "category": "Psychology & Mindset",
    "description": "A popular book on the law of attraction and positive thinking."
  },
  {
    "title": "Think Again: The Power of Knowing What You Don't Know",
    "shortTitle": "Think Again: The Power of Knowing What...",
    "path": "web/Think Again: The Power of Knowing What You Don't Know.html",
    "category": "Psychology & Mindset",
    "description": "The importance of rethinking assumptions for personal growth."
  },
  {
    "title": "Thinking, Fast and Slow",
    "shortTitle": "Thinking, Fast and Slow",
    "path": "web/Thinking, Fast and Slow.html",
    "category": "Psychology & Mindset",
    "description": "A deep dive into human decision-making and cognitive biases."
  }
];