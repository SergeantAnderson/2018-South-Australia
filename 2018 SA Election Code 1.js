const introTitle = document.querySelector("#inner_window_1 h3");
if (introTitle) {
	introTitle.textContent = "Do you have what it takes to run the state?";
  }

document.getElementById("inner_window_1").children[1].innerHTML = `<li>Can you win the 2018 South Australian Election?</li><li>Heading into the race, you'll face off against either the Incumbent Australian Labor Party or the Liberal/National Coalition, depending who you choose to play as.</li><li>The answers you choose along the Campaign Trail will affect your popularity with the public for better or for worse.</li><li>Appeal to the people across Australia to get them to put their first preference for your party.</li><li>Defy the polls and either form a Majority Government, or if not, form a strong Minority Government with Crossbench MP's</li>`;
document.styleSheets[0].insertRule(".inner_window_w_desc{ margin:1em 0 0 0.5em !important;padding-top: 0.5em !important;}", 0);
document.styleSheets[0].insertRule(".inner_window_question{ margin:1em 0 .7em 0.5em !important;padding-top: 0.3em !important;}", 0);
document.styleSheets[0].insertRule("#main_content_area { height:82% !important;}", 0);

campaignTrail_temp.show_premium = true;
campaignTrail_temp.premier_ab_test_version = -1;

let style = document.createElement('style');style.innerHTML = `#overall_result {overflow: auto;}`;document.head.appendChild(style);


quotes = [
    `"There is an opportunity for us to renew ourselves." - Jay Weatherill`,
]

selQuote = quotes[Math.round(Math.random()*(quotes.length - 1))]
corrr = `<h2>The 2018 South Australian Election</h2><font id="wittyquote" size="4" color="white"><em>` + selQuote + `</em></font>`
$("#theme_picker")[0].style.display = "none"
$("#bottomBar")[0].style.display = "none"

styling = document.createElement("style");
document.head.appendChild(styling);

styling.innerHTML = `
#candidate_form h3 {
    visibility: hidden;
}

#candidate_form h3::before {
  content: "Please select your party:";
  position: absolute;
  top: 10px;
  left: 0;
  height: 100%;
  width: 100%;
  visibility: visible;
}

#candidate_id, #running_mate_id, .person_description_window, .person_button {
    z-index: 289;
    position:relative;
}

#running_mate_form h3 {
    visibility: hidden;
}

#running_mate_form h3::before {
  content: "Please select your party leader:";
  position: absolute;
  top: 10px;
  left: 0;
  height: 100%;
  width: 100%;
  visibility: visible;
}

#candidate_summary ul li:nth-child(2),
#candidate_summary ul li:nth-child(3), #running_mate_summary ul li:nth-child(2) {
    display: none;
}
`

let z = new MutationObserver((mutationsList, observer) => {
    let runningMateSummary = document.querySelector("#running_mate_summary");
    if (runningMateSummary && runningMateSummary.children[0].children[2].innerHTML != runningMateSummary.children[0].children[2].innerHTML.replaceAll("Home State", "Division")) {
        runningMateSummary.children[0].children[2].innerHTML = runningMateSummary.children[0].children[2].innerHTML.replaceAll("Home State", "Division");
    }
});

z.observe(document, { subtree: true, childList: true });


campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2016,
            "display_year": "2018 - South Australia",
            "summary": "<div style='overflow-y:scroll;height:200px;'><p>It has been 14 Years of Labor Party rule in South Australia, as the political landscape of the state is rapidly shifting and the people are looking for a change of direction for the state. With issues surrounding Jobs, a broken Health System, and Government Integrity, the people of South Australia are looking for change.</p><p><ul><li>South Australian Labor lead by Premier Jay Weatherill are looking for a way to be re-elected, promoting Government achievements whilst defending off constant attacks.</li><li>The Liberal Party of South Australia lead by Opposition Leader Steven Marshall is looking to change the direction of the state, promoting new prosperity for the state.</li><li> Nick Xenephon's SA Best is entering the frame as an alternative to the major parties, and is looking to score big and hold both parties accountable in the State Parliament.</li></ul><p>The Election is a decisive make or break for the major parties and the future of the state.</p></div>",
            "image_url": "https://i.imgur.com/hNcSgSY.png",
            "winning_electoral_vote_number": 24,
            "advisor_url": "123",
            "recommended_reading": "<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>",
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2016,
        "is_premium": 0,
        "display_year": "2018 - South Australia"
    }
]

campaignTrail_temp.credits = "Not Dan Bryan"

campaignTrail_temp.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
        "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 3,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 25,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 1001,
        "fields": {
            "first_name": "Liberal Party of South Australia - ",
            "last_name": "LPSA",
            "election": 20,
            "party": "",
            "state": "",
            "priority": 1,
            "description": "<p>The Liberal Party of South Australia Serve as the official Opposition within the State Parliament on North Terrace. Poised to claim victory in the upcoming poll, the Liberal's have to captivate on 14 years worth of Labor Government whilst pushing back against the threat of SA Best, who eargerly seek to split the vote in key seats across the state.</p><p>Lead by Opposition leader Steven Marshall, the Liberal's plan for the state is to bring greater economic prosperity to the state, delivering on the promise of fixing the State's heath system and creating economic oppotunities through infrastructure and jobs, and fixing a broken health system.</p><p>The Party seeks to capitalize off the unpopulartity off the incumbent Labor Government in order to win in key marginal seats. With this, the Liberals are the favourites to win thanks to redistribution in the pary's favour in key electorates.</p>",
            "color_hex": "#1a4cb6",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/AKNdVA1.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1002,
        "fields": {
            "first_name": "Steven",
            "last_name": "Marshall",
            "election": 20,
            "party": "Liberal",
            "state": "Dunstan",
            "priority": 1,
            "description": "<p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/W5pPAD7.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p>Steven Marshall serves as the incumbent opposition leader of South Australia, seeking to re-challenge the incumbent Labor Government in a repeat of the 2014 State Election. Marshall had previously served as Deputy Opposition leader after the 2010 State Election before accending to the leadership of the State Liberal Party.</p><p>Marshall won't give up on persuing the top job to lead the state after a close loss against the State Labor Party in 2014, resulting in a hung parliament. With holding the Government to account, Marshall may find an easy path to Government thanks to a redistribution effort in 2016 with the Liberals ahead in key seats. However, despite this, Marshall needs to hold his ground against competing competition as Nick Xenephon's SA Best target's key Liberal seats in and around the Metropolitan Adelaide area that Marshall's party holds.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2001,
        "fields": {
            "first_name": "South Australia Labor - ",
            "last_name": "SALP",
            "election": 20,
            "party": "",
            "state": "",
            "priority": 1,
            "description": "<p>South Australian Labor enter the race as the official Government seeking re-election. After a close 2014 result, the Government lead by Jay Weatherill has been on a knife's edge with the result of a hung parliament, working with crossbench independents to get legislation through the Parliament.</p><p>State Labor have been in power since the 2002 Election under then Premier Mike Rann, but resigned in 2011. It has been 16 years of State Labor rule, and the party must defend itself in a already one sided election favoured to the Liberal's after re-distribution. Labor must defend both its economic record and promises made in order to win Government for a 5th term in power, but the people of South Australia seek change.</p><p>SA Labor will need to defend itself in key seats in heated 3 way contests with the Liberals and Nick Xenephon's SA Best in key seats across the state.</p>",
            "color_hex": "#b33939",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://saliberal.org.au/images/site_labourpolicies/Square-Lockup-CMYK.jpg",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2002,
        "fields": {
            "first_name": "Jay",
            "last_name": "Weatherill",
            "election": 20,
            "party": "Labor",
            "state": "Cheltenham",
            "priority": 1,
            "description": "",
            "color_hex": "#b33939",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/6382NN8.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p>Jay Weatherill serves as the 45th Premier of South Australia after the resignation of his sucessor, Mike Rann. Weatherill has served in the state cabinet holding, most notible, Treasurer of the state. As Premier, Weatherill has head the state through extreme economic presedence and a growing unpopularity amongst the people</p><p>Weatherill will need to weather the extreme conditions of the campaign in order to form Government for a 5th Time, defending his Government's record against the Liberals and growing alternative, Nick Xenephon's SA Best. With his Government already handing on by threads after a close 2014 race, Weatherill must capitalize on his record, whilst tying the State Liberals with an unpopular and slowly unravelling, Federal Liberal Government, in order to save face.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },

    {
        "model": "campaign_trail.candidate",
        "pk": 3001,
        "fields": {
            "first_name": "SA Best - ",
            "last_name": "SAB",
            "election": 20,
            "party": "",
            "state": "",
            "priority": 1, 
            "description": "<p>After seeing electoral sucess under the banner of 'Nick Xenephon Team' in the 2016 Federal Election, the new SA Best political party led by Senator Nick Xenephon is looking to make thier mark locally, contesting the State Election in just over 20 seats across the state. The parties goal is to show themselves as an alternative to the two major parties, focusing on more centralist views to capture disenfranchised voters from the major parties.</p><p>Yet this party under its former banner has made electoral sucess federally, claiming the seat of Mayo, now held by Rebecca Sharkie after a strong victory in the 2016 Federal Election.</p><p>In order to achieve their goal of electoral sucess on a state level, the party will need to demonstrate it is capable of leading and to defend itself from attacks from the two major political parties.</p>",
            "color_hex": "#f36e15",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/TgYK8Zy.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 3002,
        "fields": {
            "first_name": "Nick",
            "last_name": "Xenephon",
            "election": 20,
            "party": "SA Best",
            "state": "None - Contesting Hartley",
            "priority": 1,
            "description": "",
            "color_hex": "#b33939",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/063xHZM.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p>Nick Xenephon currently serves as one of the 12 Senator's of South Australia in the Federal Parliament. 2016 saw electoral sucess for the Nick Xenephon team, taking the Liberal stronghold seat of Mayo in the Adelaide Hills, with Rebecca Sharkie becoming the first NXT member of the Federal House of Representatives. Now the party is focusing on a more local level, with Xenephon to take the charge in the state election in order to form the crossbench and decide the Government in the event of a Hung Parliament in South Australia</p><p>Xenephon is seeking to contest the lower house seat of Hartley in Adelaide's east, held by rising Liberal star, Vincent Tarzia, a relatively safe Liberal Seat.</p><p>Under his leadership, SA Best is looking to make a reliable dent in the states parliament, and for Nick to fend off attacks from the major parties.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 109261,
        "fields": {
            "candidate": 1001,
            "running_mate": 1002
        }
    },
     {
        "model": "campaign_trail.running_mate",
        "pk": 109262,
        "fields": {
            "candidate": 2001,
            "running_mate": 2002
        }
    },

    {
        "model": "campaign_trail.running_mate",
        "pk": 109263,
        "fields": {
            "candidate": 3001,
            "running_mate": 3002
        }
    },
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            1001,
            2001,
            3001
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            1001,
            2001,
            3001
        ]
    }
]

jet_data = {
    "headerColor": "#d8ad4f",
    "windowColor": "#3d406c",
    "containerColor": "#be5b5b",
    "innerWindowColor": "#d8ad4f",
    "bannerImageUrl": "https://jetsimon.com/public/placeholderbanner.png",
    "backgroundImageUrl": "https://thepropertytribune.com.au/wp-content/uploads/2021/06/adelaide-skyline.jpg",
    "endingTextColor": "#000000",
}

//#startcode

nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#d8ad4f";
nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#3d406c";
document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;
$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;
$(".container")[0].style.backgroundColor = "#be5b5b";
document.getElementById("header").src = "https://jetsimon.com/public/placeholderbanner.png";
document.body.background = "https://thepropertytribune.com.au/wp-content/uploads/2021/06/adelaide-skyline.jpg";
document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#d8ad4f!important;}</style>";

//#endcode
