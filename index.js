require('dotenv').config();
const Telegraf = require('telegraf');
const axios = require('axios');
const mySecret = process.env['TOKEN'];
const bot = new Telegraf(mySecret);


bot.command('start', ctx=> {
    sendStartMessage(ctx);
})

bot.action('start', ctx =>{
    // ctx.deleteMessage(hello);
    sendStartMessage(ctx);   
})

function sendStartMessage(ctx){
    let startMessage = 'Heyy! I am Niax - FAQ bot:) \nHow can I help you?'
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HELP', callback_data: 'help'},
                        { text: 'LANGUAGE',callback_data: 'language'}                         
                    ],
                    [
                        { text: 'HACKATHON', callback_data: 'hackinfo'},  
                        { text: 'REGISTRATION', callback_data: 'registration'}             
                    ],
                    [
                        { text: 'FAQ', callback_data: 'faq'}
                    ]    
                ]            
            }
        })
}

bot.action('hstart', ctx =>{
    // ctx.deleteMessage();
    sendHStartMessage(ctx);   
})


function sendHStartMessage(ctx){
    let startMessage = 'नमस्कार!! मैं NiaxFAQBot हूं:) \nमैं आपकी कैसे मदद कर सकता हूं?'
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'मदद', callback_data: 'help'},
                        { text: 'भाषा',callback_data: 'language'}                         
                    ],
                    [
                        { text: 'आयोजित हैकथॉन', callback_data: 'hackinfo'},  
                        { text: 'पंजीकरण', callback_data: 'registration'}             
                    ],
                    [
                        { text: 'सामान्य प्रशन', callback_data: 'faq'}
                    ]    
                ]            
            }
        })
}

const helpMessage = `
Say something to mention
/start - start the bot
/help - command reference
/fortune - fortune cookie
`;

function help(ctx){
    ctx.reply(helpMessage);
}    

bot.action('hackinfo', ctx => {
    let hackMessage = "ABOUT THE HACKATHON \nRapid Hacks is a 24-hour online hackathon organized by GDSC IGDTUW, with tracks designed specifically for beginners. No matter if you are still ideating your solution, designing it or have a prototype ready ~ Everyone is invited!"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Tracks', callback_data: 'ps'}
                    ],
                    [
                        { text: 'Rules', callback_data: 'rules'},                   
                        { text: 'Mode', callback_data: 'loc'},
                        { text: 'Prizes', callback_data: 'prizes'}
                        
                    ],
                    [
                        { text: 'Judges and Speakers', callback_data: 'js'}
                    ],
                    [
                        
                        { text: 'Hackathon Theme', callback_data: 'hacktheme'},
                        { text: 'Registration Cost', callback_data: 'regcost'}
                    ],
                    [
                        { text: 'Resources', callback_data: 'resources'/* url:'https://www.youtube.com/watch?v=Lt-MY9LQLv0&list=PLX2ojSA27XYhIopdU2RRQIMe7gfwcKL84&index=66&ab_channel=TutorialWeekly' */},
                        { text: 'Search Devfolio', url:'https://devfolio.co/hackathons'}
                        
                    ],
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]
                    
                ]
            }
        })
})

bot.action('language', ctx => {
  
    let hackMessage = "Choose your preferred language."
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                        [
                            { text: 'English', callback_data: 'start' },
                            { text: 'Hindi', callback_data: 'hstart' },                         
                        ],
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('rules', ctx => {
  
    let hackMessage = "Visit here for the code of conduct of the hackathon - https://devfolio.co/code-of-conduct"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('hacktheme', ctx => {
  
    let hackMessage = "The theme for Rapid Hacks is building Sustainable Technology. However, the hackers can also submit projects based on any other theme under the Open Innovation Category."
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})


bot.action('resources', ctx => {
  
    let hackMessage = "Replit Resources: \n1. https://youtu.be/vrEtQ3nEVAc \n2. https://youtu.be/YqwEWAXIGR0 \n3. https://youtu.be/QJR8WHDYWZo"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })

})

bot.command('fortune', (ctx) => {
    axios.get('http://yerkee.com/api/fortune')
        .then(res => {
            console.log(res.data.fortune);
            ctx.reply(res.data.fortune)
        }).catch(e => {
            console.log(e);
        })

})


bot.action('regcost', ctx => {
    
    let hackMessage = "Don't break the bank, join us for free!"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('loc', ctx => {
    
    let hackMessage = "This hackathon will be conducted in online mode."
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('prizes', ctx => {
    
    let hackMessage = "PRIZE POOL : $1,499 \nPARTNERS:\nPolygon $350 \nFilecoin $250 \nReplit $50 \nSolana $850 \n\nDESIGN TRACK WINNER: $0\nIDEATE TRACK WINNER: -$1\nSOLVE TRACK WINNER: $0\nBest All Girls Team: $0 \n\nYou can also visit the site - https://rapidhacks.devfolio.co/prizes"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('js', ctx => {
    
    let hackMessage = "The pannel of judges include:\n1. Parul Mann(Lead, GDSC IGDTUW) LinkedIn - https://www.linkedin.com/in/parul-mann-577966203 \n2. Tamanna Khaitan(Technical Lead, GDSC IGDTUW) LinkedIn - https://www.linkedin.com/in/tamannakhaitan/ \n3. Anmol Jha(Management Lead, GDSC IGDTUW) LinkedIn - https://www.linkedin.com/in/anmol-jha/"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('ps', ctx => {
    // ctx.answerCbQuery();
    bot.telegram.sendMessage(ctx.chat.id, 'Select your batch.',
        {
            reply_markup: {
                keyboard: [
                    [
                        {text: "2023/2024/2025"},
                        {text: "2026"}
                    ],
                    [
                        {text: "Remove Keyboard"}  
                    ]
                ],
                resize_keyboard: true,
                one_time_keyboard:true
                            
            }
        })
      
    })


bot.hears('2023/2024/2025', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'The hackathon has tracks designed specially for beginners with no-code, low-code and coding tracks: \n1. IDEATE TRACK: The hackers can submit their idea. \n2. DESIGN TRACK: The hackers have to present a design of what their solution would look like. \n3. SOLVE TRACK: The hackers have to present a solution to the problem statement that they have chosen.',
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
   
})

bot.hears('2026', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'The hackathon has tracks designed specially for beginners with no-code, low-code and coding tracks: \n1. IDEATE TRACK: The hackers can submit their idea. \n2. DESIGN TRACK: The hackers have to present a design of what their solution would look like. \n3. SOLVE TRACK: The hackers have to present a solution to the problem statement that they have chosen.',
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.hears('Remove Keyboard', ctx => {
    
    bot.telegram.sendMessage(ctx.chat.id, 'Removed Keyboard.',
        {
            reply_markup: {
                remove_keyboard: true
            }
        })
        ctx.reply("Enter /start.");
})

bot.action('registration', ctx => {
    let hackMessage = "REGISTRATION DETAILS"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Deadline', callback_data: 'dead'},
                        { text: 'Reminder', callback_data: 'rem'}
                    ],
                    [
                        {text: 'Requirements', callback_data:'req'}
                    ],                 
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]
                    
                ]
            }
        }) 
    })   

    bot.hears("Ishika Pandey",ctx=>{
        //"Event of the text"
          
          ctx.reply("Thanks Ishika, Can you share your email-id?")  //context function reply the message
          
        })
        bot.hears("ishika123@gmail.com",ctx=>{
          
          ctx.reply("Ishika please share your teamname."); //context function reply the message
          
        }) 
        bot.hears("Unbound",ctx=>{
          
            ctx.reply("Thanks for the details."); //context function reply the message
            bot.telegram.sendMessage(ctx.chat.id, hackMessage,
                {
                    reply_markup: {
                        keyboard: [
                            [
                                {text: "Register Now"}
                            ],
                            [
                                {text: "Remove Keyboard"}  
                            ]
                        ],
                        resize_keyboard: true,
                        one_time_keyboard:true
                                    
                    }
                })
              
            })
          
        

bot.action('req', ctx => {
        let hackMessage = "Requirements for registration: \n1. Name  \n2. Email-Id  \n3. Phone Number - Enter 'phone' \n4. Team name "
        ctx.reply("To continue the registartion process, enter 'Register Now'.");
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
          
        })

bot.hears('Register Now', ctx => {
    ctx.reply('Check out the link below: \https://bit.ly/RapidHacks');                
        })

bot.hears('Remove Keyboard', ctx => {
    
        bot.telegram.sendMessage(ctx.chat.id, 'Removed Keyboard.',
            {
                reply_markup: {
                    remove_keyboard: true
                }
            })
            ctx.reply("Enter /start.");
    })

bot.action('dead', ctx => {
    
        let hackMessage = 'The registration deadline for this hackthon is 18th Feb 2023, 11:59 PM. Hurry up and register for this opportunity!!!'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

let sendInterval;
bot.hears(/\/setreminder|\/stop/, (ctx) => {
  if (sendInterval) {
    clearInterval(sendInterval);
  }

  if (/\/setreminder/.test(ctx.update.message.text)) {
    sendInterval = setInterval(() => {
      ctx.reply('HACKATHON ON 18th Feb,2023!! \nSUBMIT YOUR PROJECT!!!');
    }, 600);
  } else if (/\/stop/.test(ctx.update.message.text)) {
    ctx.reply('ALLLLL THE BESTTT!!');
    ctx.reply("Enter '/start' command to go back.");
  }
});

bot.action('rem', ctx => {
    
        let hackMessage = "Should I set a reminder for you?? \nEnter '/setreminder' to set reminder. \nEnter '/stop' to stop the reminder."
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })
        
bot.action('help', ctx => {
    
        help(ctx)
    })

    bot.action('faq', ctx => {
        let faqMessage = 'HAVE FURTHER QUESTIONS?? DONT WORRY'
        
        bot.telegram.sendMessage(ctx.chat.id, faqMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'TEAM SIZE', callback_data: 'ts'},
                            { text: 'TIMELINE', callback_data: 'timeline'},
                            { text: 'CONTACT', callback_data: 'contact'}                           
                        ],
                        [
                            { text: 'WHO CAN PARTICIPATE', callback_data: 'wcp'}                            
                        ]
                        
                    ]
                }
            })
    })
bot.hears('phone', (ctx) => {
        // console.log(ctx.from)
        bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);
    
    })

const requestPhoneKeyboard = {
        reply_markup: {
            keyboard: [
                [{
                    text: "Phone Number",
                    request_contact: true,
                    one_time_keyboard: true
                }],
                [
                    {text: "Remove Keyboard"} 
                ]
               
            ],
            resize_keyboard: true,
            one_time_keyboard:true
        }
    };
    

    bot.action('ts', ctx => {
    
        let hackMessage = '1-4 members'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

    bot.action('wcp', ctx => {
    
        let hackMessage = 'Open to all, big ideas welcome - hack with us!'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

    bot.action('timeline', ctx => {
    
        let hackMessage = "Registration starts - 26 Jan 2023, 7 AM \nRegistration ends 18th Feb 2023, 11:59 PM \nHackathon starts - 18 Feb 2023, 12 PM \nHackathon ends - 19 Feb 2023, 12PM \nResults announced 19 Feb 2023 7 PM"
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

    bot.action('contact', ctx => {
    
        let hackMessage = 'Connect with us!'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Insta', url:'https://www.instagram.com/gdsc_igdtuw/' },                        
                        ],
                        [
                            { text: 'Phone No: 9823138917', callback_data: 'no' },                        
                        ],
                        [
                            { text: 'Email-id: dscigdtuw@gmail.com', callback_data: 'id' },                        
                        ], 
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })
        
   


bot.launch();
