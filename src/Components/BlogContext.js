import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([
        {
            "Title" : " Katrina Kaif And Vicky Kaushal Might Share Screen Space In Jee Le Zaraa: Report - NDTV Movies",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "January 15 2022",
            "ImageAsset"    : "https://c.ndtvimg.com/2022-01/qtklueco_katrina-kaif-_625x300_13_January_22.jpg",
            "BlogContent"   : "The film will also star Priyanka Chopra and Alia Bhatt in the lead roles along with Katrina Kaif",
            "Likes"         : "1000K"
        },
        {
            "Title" : " Tabu to star in Ajay Devgn's 'Bholaa' - the remake of Tamil blockbuster 'Kaithi' - Exclusive! - Times of India",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Januaury 14 2022",
            "ImageAsset"    : "https://static.toiimg.com/thumb/msid-88872893,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-46584/88872893.jpg",
            "BlogContent"   : "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devgn has gone on floors with the title ‘Bholaa’",
            "Likes"         : "700"
        },
        {
            "Title" : " Naga Chaitanya BREAKS silence on divorce with Samantha Ruth Prabhu; explains how it impacted their family, an - Bollywood Life",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Januaury 15 2022",
            "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/01/Samantha-35-600x315.png",
            "BlogContent"   : "Naga Chaitanya BREAKS silence on divorce with Samantha Ruth Prabhu; explains how it impacted their family, and both of them professionally Also get bollywood actors, actress, movie, parties & event photos at Bollywoodlife.com",
            "Likes"         : "5000K"
        },
        {
            "Title" : " Samantha says she ‘looks possessed’ as she shares yet another intense workout video; WATCH - PINKVILLA",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Januaury 13 2022",
            "ImageAsset"    : "https://www.pinkvilla.com/files/styles/fbimagesection/public/samantha_workout_video_social.jpg?itok=MlF-0DMX",
            "BlogContent"   : "Samantha Ruth Prabhu has shared yet another intense workout video on her Instagram handle.",
            "Likes"         : "600"
        },
        {
            "Title" : " Vicky Kaushal and Katrina Kaif to Celebrate First Lohri After Marriage, Actor Enjoys Jalebi in Indore - News18",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Januaury 15 2022",
            "ImageAsset"    : "https://images.news18.com/ibnlive/uploads/2021/12/katrina-and-vicky-pic-163999921816x9.jpg",
            "BlogContent"   : "The Uri actor, who is in Indore for his work commitments, recently took to his Instagram Story section to share a glimpse of him enjoying sweets before the festivities.",
            "Likes"         : "800"
        }
    ]);

    const [technology, setTechnology] = useState([
        {
            "Title" : " Motorola Edge X30 to hit global markets as Edge 30 Pro - GSMArena.com news - GSMArena.com",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Januaury 15 2022",
            "ImageAsset"    : "https://mcdn.wallpapersafari.com/medium/13/25/vZL2wb.jpg",
            "BlogContent"   : "The Motorola Edge X30 was announced in China last month running the Qualcomm Snapdragon 8 Gen 1 chipset and the phone will likely hit the global market pretty soon as evident by its newly collected NBTC certification",
            "Likes"         : "800"
        },
        {
            "Title" : " Halo Infinite's Next Multiplayer Bonus Revealed For Game Pass Subscribers - GameSpot",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Januaury 10 2022",
            "ImageAsset"    : "https://www.gamespot.com/a/uploads/screen_kubrick/1179/11799911/3926694-screenshot2022-01-13at7.32.45am.png",
            "BlogContent"   : "Game Pass Ultimate members can pick up the Pass Tense skin for the Warthog right now",
            "Likes"         : "650"
        },
        {
            "Title" : " Samsung Galaxy S21 FE verus Pixel 6 camera comparison - Phandroid",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Januaury 12 2022",
            "ImageAsset"    : "https://i.ytimg.com/vi/PO2H0Ot3SfE/maxresdefault.jpg",
            "BlogContent"   : "The new Samsung Galaxy S21 FE has arrived, delivering the same basic specs as the Galaxy S21 with a lower price point and some new camera features. But can i.",
            "Likes"         : "700"
        },
        {
            "Title" : " Google Meet's live translated captions start rolling out widely - Engadget",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Januaury 14 2022",
            "ImageAsset"    : "https://s.yimg.com/os/creatr-uploaded-images/2022-01/74f5be60-745f-11ec-9f5c-922d19aea87a",
            "BlogContent"   : "Google Meet has started rolling out live translated captions widely after testing the feature last year..",
            "Likes"         : "900"
        },
        {
            "Title" : " OnePlus 10 Pro vs OnePlus 9 Pro: Full Specifications Compared - Moneycontrol",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Januaury 12 2022",
            "ImageAsset"    : "https://images.moneycontrol.com/static-mcnews/2022/01/oneplus-10-pro-vs-oneplus-9-pro-770x433.jpg",
            "BlogContent"   : "Find out how the OnePlus 10 Pro compares against its predecessor.",
            "Likes"         : "422"
        }
    ]);
    
    const [hollywood, setHollywood] = useState([
        {
            "Title" : " The Beatles: Get Back director Peter Jackson on turning the boy band's breakup saga into a 'human story'",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Januaury 15 2022",
            "ImageAsset"    : "https://images.firstpost.com/wp-content/uploads/2020/07/priyanka-nick.jpg?impolicy=website&width=640&height=362",
            "BlogContent"   : "“Our movie doesn’t show the breaking up of the Beatles,” Peter Jackson said, “but it shows the one singular moment in history that you could possibly say was the beginning of the end.”",
            "Likes"         : "800"
        },
        {
            "Title" : " Jason Momoa, Lisa Bonet separate after 16 years together: 'The love between us carries on'",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Januaury 14 2022",
            "ImageAsset"    : "https://images.firstpost.com/wp-content/uploads/2022/01/Jason.jpeg?impolicy=website&width=640&height=363",
            "BlogContent"   : "We have all felt the squeeze and changes of these transformational times… A revolution is unfolding (tilde) and our family is of no exception,” the post said, adding that they were announcing the split so “as we go about our lives we may do so with dignity and honesty.",
            "Likes"         : "800K"
        },
        {
            "Title" : " 2021 round-up: The Underground Railroad to Mare of Easttown; here are best international series on OTT",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2022",
            "ImageAsset"    : "https://images.firstpost.com/wp-content/uploads/2021/12/skj.jpg?impolicy=website&width=640&height=363",
            "BlogContent"   : "This is one of the greatest cinematic experiences of all time. After spending 10 precious hours of my life on Barry Jenkins’s certifiable masterpiece, I am rendered numbed and speechless. I can only say this for those who have yet not seen this monumental classic",
            "Likes"         : "2M"
        },
        {
            "Title" : " Sandra Bullock credits Netflix for extended career: 'I would have been out in the cow pasture'",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Januaury 14 2021",
            "ImageAsset"    : "https://images.firstpost.com/wp-content/uploads/2022/01/sandra-bullock459_.jpg?impolicy=website&width=640&height=363",
            "BlogContent"   : "Sandra Bullock has praised Netflix for employing actors like her, adding that if it was not for the streaming giant, she “would have been out in the cow pasture",
            "Likes"         : "800K"
        },
        {
            "Title" : " Lily Collins' Emily In Paris renewed for two more seasons at Netflix",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Januaury 15 2022",
            "ImageAsset"    : "https://images.firstpost.com/wp-content/uploads/2022/01/eml.jpg?impolicy=website&width=640&height=363",
            "BlogContent"   : "Emily In Paris season 2, which debuted in December, topped the Global Netflix Top 10 list with 107.6 million hours viewed from 22 to 26 December, Netflix had said in a statement",
            "Likes"         : "1M"
        }
       
    ]);

    const [fitness, setFitness] = useState([
        {
            "Title" : " Eight sustainable changes you can make in 2022 to reach your fitness goals",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Januaury 14 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2021/12/Getty_weight-loss_1200.jpg?resize=450,250",
            "BlogContent"   : "New Year is always an opportunity for fresh beginnings and not repeating mistakes of the past year; here's what you can do",
            "Likes"         : "800K"
        },
        {
            "Title" : " Six at-home fitness challenges to help you reach your goals",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Januaury 16 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2021/10/workout_1200_getty.jpg",
            "BlogContent"   : "It cannot be denied that the pandemic has pushed everyone to think about their health more holistically. As such, whether practicing yoga or investing in quality exercise equipment, people are attempting to discover different ways to exercise effectively within the four walls of their home, said Rhea Singh Anand, co-founder, Flexnest.",
            "Likes"         : "1M+"
        },
        {
            "Title" : " Should you exercise in the evening? Here’s what Ayurveda says",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Januaury 12 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2021/10/cardio_1200_getty.jpg?resize=450,250",
            "BlogContent"   : "You may find it hard to wake up in the morning or struggle to sleep early at night, but workout in the evening is not for you,ayurvedic practitioner Dr Varalakshmi Yanamandra said",
            "Likes"         : "800K"
        },
        {
            "Title" : " ‘Health must bring freedom, not restrictions’: Ankita Konwar pens note on fad diets and mindful eating",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Januaury 15 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2021/05/ankita-konwar_1200_instagram.jpg?resize=450,250",
            "BlogContent"   : "...fad diets and 10 day magical transformations never work. What works is a sustainable wholesome mindful way of living, she said.",
            "Likes"         : "1M"
        },
        {
            "Title" : " Say goodbye to swollen ankles, stiff back, weakness in legs with these ‘effective stretches’",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Januaury 15 2021",
            "ImageAsset"    : "https://images.indianexpress.com/2021/09/stretching_1200_getty.jpg?resize=450,250",
            "BlogContent"   : "These simple stretches, when done throughout the day, also help with a flat stomach, said celebrity nutritionist Rujuta Diwekar",
            "Likes"         : "800K"
        }
    ]);

    const [food, setFood] = useState([
        {
            "Title" : " Ganesh Chaturthi 2018: Healthy modak recipe for kids",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.indianexpress.com/2018/09/modak-healthy.jpg?resize=450,338",
            "BlogContent"   : "Ganesh Chaturthi 2018: With these healthy Modaks, you don’t have to ask your child to stop at one!",
            "Likes"         : "500k+"
        },
        {
            "Title" : " Parsi New Year 2018: Does your child love eggs? Try this Deekro Ando Bhurji!",
            "CategoryName"  : "Food",
            "PublishedDate" : "Januaury 14 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2018/08/2-deekra-ando-bhurji.jpg?resize=450,338",
            "BlogContent"   : "Parsi New Year 2018: Their love for eggs is also seen in dishes like Pora, which is a Parsi omelette and “Par eeda” dishes which include vegetables like tomato, potato and ladyfinger, cooked with the eggs on top.",
            "Likes"         : "1M+"
        },
        {
            "Title" : " Try these yummy wraps!",
            "CategoryName"  : "Food",
            "PublishedDate" : "Januaury 16 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2018/07/wrap1.jpg?resize=450,338",
            "BlogContent"   : "Multigrain whole wheat contains fibres for digestion, lowers cholesterol, cancer risk and blood pressure, regulates blood sugar, redistributes fat and reduces asthma risk.",
            "Likes"         : "400K"
        },
        {
            "Title" : " Christmas 2019 recipes: Make plum pudding and mince pie for your child",
            "CategoryName"  : "Food",
            "PublishedDate" : "Januaury 16 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2019/12/Traditional-Plum-Pudding-at-Novotel-ibis-Bengaluru-Outer-Ring-Road.jpg?resize=450,250",
            "BlogContent"   : "Christmas 2019: No festival is complete without gorging on delicious treats. Make these dishes at home and enjoy with your family.",
            "Likes"         : "1M+"
        },
        {
            "Title" : " Baby food for your six-month-old: Things to keep in mind",
            "CategoryName"  : "Food",
            "PublishedDate" : "Januaury 16 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2021/08/GettyImages-baby-food-toddlers-1200.jpg?resize=450,250",
            "BlogContent"   : "A six-month-old baby is primarily breastfed or formula-fed. However, solid food can be introduced for breakfast or lunch.",
            "Likes"         : "708K"
        }
    ]);

    return(
        <BlogContext.Provider   value={ { value1 : [bollywood, setBollywood],
                                          value2 : [hollywood,setHollywood],
                                          value3 : [technology, setTechnology],
                                          value4 : [fitness, setFitness],
                                          value5 : [food, setFood] } }>
            {props.children}
        </BlogContext.Provider>
    )
        }