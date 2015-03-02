(function () {

    'use strict';

    angular.module('ngEmoticons', ['ngSanitize'])
        .filter('emoticons', ['$sce', function ($sce) {
            var icons = [{
                'text': ':)',
                'class': 'smiley',
                'code': 'e60a'
            }, {
                'text': ':D',
                'class': 'happy',
                'code': 'e608'
            }, {
                'text': ':d',
                'class': 'happy',
                'code': 'e608'
            }, {
                'text': ':(',
                'class': 'sad',
                'code': 'e60e'
            }, {
                'text': ':/',
                'class': 'wondering',
                'code': 'e620'

            }, {
                'text': ':P',
                'class': 'tongue',
                'code': 'e60c'
            }, {
                'text': ':p',
                'class': 'tongue',
                'code': 'e60c'
            }, {
                'text': '3:)',
                'class': 'evil',
                'code': 'e618'
            }, {
                'text': '(^)',
                'class': 'thumbsup2',
                'code': 'e607'
            }, {
                'text': ';)',
                'class': 'wink',
                'code': 'e610'
            }, {
                'text': ':o',
                'class': 'shocked',
                'code': 'e61a'
            }, {
                'text': '-_-',
                'class': 'neutral',
                'code': 'e61e'
            }, {
                'text': '(y)',
                'class': 'thumbs-up',
                'code': 'e606'
            }, {
                'text': ':*',
                'class': 'heart',
                'code': 'e604'
            }, {
                'text': '&lt;3',
                'class': 'heart',
                'code': 'e604'
            }, {
                'text': '<3',
                'class': 'heart',
                'code': 'e604'
            }, {
                'text': '&lt;/3',
                'class': 'heart-broken',
                'code': 'e605'
            }, {
                'text': '</3',
                'class': 'heart-broken',
                'code': 'e605'
            }, {
                'text': '^_^',
                'class': 'grin',
                'code': 'e612'
            }, {
                'text': '8-)',
                'class': 'cool',
                'code': 'e614'
            }, {
                'text': '8|',
                'class': 'cool',
                'code': 'e614'
            }, {
                'text': ':S',
                'class': 'confused',
                'code': 'e61c'
            }, {
                'text': ':s',
                'class': 'confused',
                'code': 'e61c'
            }];

            var emojiList = [
                "bowtie", "smile", "laughing", "blush", "smiley", "relaxed", "smirk", "heart_eyes", "kissing_heart", "kissing_closed_eyes", "flushed",
                "relieved", "satisfied", "grin", "wink", "stuck_out_tongue_winking_eye", "stuck_out_tongue_closed_eyes", "grinning", "kissing", "winky_face",
                "kissing_smiling_eyes", "stuck_out_tongue", "sleeping", "worried", "frowning", "anguished", "open_mouth", "grimacing", "confused", "hushed",
                "expressionless", "unamused", "sweat_smile", "sweat", "wow", "disappointed_relieved", "weary", "pensive", "disappointed", "confounded",
                "fearful", "cold_sweat", "persevere", "cry", "sob", "joy", "astonished", "scream", "neckbeard", "tired_face", "angry", "rage", "triumph", "sleepy",
                "yum", "mask", "sunglasses", "dizzy_face", "imp", "smiling_imp", "neutral_face", "no_mouth", "innocent", "alien", "yellow_heart",
                "blue_heart", "purple_heart", "heart", "green_heart", "broken_heart", "heartbeat", "heartpulse", "two_hearts", "revolving_hearts", "cupid",
                "sparkling_heart", "sparkles", "star", "star2", "dizzy", "boom", "collision", "anger", "exclamation", "question", "grey_exclamation",
                "grey_question", "zzz", "dash", "sweat_drops", "notes", "musical_note", "fire", "hankey", "poop", "shit", "\\+1", "thumbsup", "-1", "thumbsdown",
                "ok_hand", "punch", "facepunch", "fist", "v", "wave", "hand", "raised_hand", "open_hands", "point_up", "point_down", "point_left", "point_right",
                "raised_hands", "pray", "point_up_2", "clap", "muscle", "metal", "fu", "walking", "runner", "running", "couple", "family", "two_men_holding_hands",
                "two_women_holding_hands", "dancer", "dancers", "ok_woman", "no_good", "information_desk_person", "raising_hand", "bride_with_veil",
                "person_with_pouting_face", "person_frowning", "bow", "couplekiss", "couple_with_heart", "massage", "haircut", "nail_care", "boy", "girl",
                "woman", "man", "baby", "older_woman", "older_man", "person_with_blond_hair", "man_with_gua_pi_mao", "man_with_turban",
                "construction_worker", "cop", "angel", "princess", "smiley_cat", "smile_cat", "heart_eyes_cat", "kissing_cat", "smirk_cat", "scream_cat",
                "crying_cat_face", "joy_cat", "pouting_cat", "japanese_ogre", "japanese_goblin", "see_no_evil", "hear_no_evil", "speak_no_evil",
                "guardsman", "skull", "feet", "lips", "kiss", "droplet", "ear", "eyes", "nose", "tongue", "love_letter", "bust_in_silhouette",
                "busts_in_silhouette", "speech_balloon", "thought_balloon", "feelsgood", "finnadie", "goberserk", "godmode", "hurtrealbad", "rage1", "rage2",
                "rage3", "rage4", "suspect", "trollface", "sunny", "umbrella", "cloud", "snowflake", "snowman", "zap", "cyclone", "foggy", "ocean", "cat", "dog",
                "mouse", "hamster", "rabbit", "wolf", "frog", "tiger", "koala", "bear", "pig", "pig_nose", "cow", "boar", "monkey_face", "monkey", "horse",
                "racehorse", "camel", "sheep", "elephant", "panda_face", "snake", "bird", "baby_chick", "hatched_chick", "hatching_chick", "chicken", "penguin",
                "turtle", "bug", "honeybee", "ant", "beetle", "snail", "octopus", "tropical_fish", "fish", "whale", "whale2", "dolphin", "cow2", "ram", "rat",
                "water_buffalo", "tiger2", "rabbit2", "dragon", "goat", "rooster", "dog2", "pig2", "mouse2", "ox", "dragon_face", "blowfish", "crocodile",
                "dromedary_camel", "leopard", "cat2", "poodle", "paw_prints", "bouquet", "cherry_blossom", "tulip", "four_leaf_clover", "rose", "sunflower",
                "hibiscus", "maple_leaf", "leaves", "fallen_leaf", "herb", "mushroom", "cactus", "palm_tree", "evergreen_tree", "deciduous_tree", "chestnut",
                "seedling", "blossom", "ear_of_rice", "shell", "globe_with_meridians", "sun_with_face", "full_moon_with_face", "new_moon_with_face", "new_moon",
                "waxing_crescent_moon", "first_quarter_moon", "waxing_gibbous_moon", "full_moon", "waning_gibbous_moon", "last_quarter_moon",
                "waning_crescent_moon", "last_quarter_moon_with_face", "first_quarter_moon_with_face", "moon", "earth_africa", "earth_americas",
                "earth_asia", "volcano", "milky_way", "partly_sunny", "octocat", "squirrel", "bamboo", "gift_heart", "dolls", "school_satchel", "mortar_board", "flags",
                "fireworks", "sparkler", "wind_chime", "rice_scene", "jack_o_lantern", "ghost", "santa", "christmas_tree", "gift", "bell", "no_bell",
                "tanabata_tree", "tada", "confetti_ball", "balloon", "crystal_ball", "cd", "dvd", "floppy_disk", "camera", "video_camera", "movie_camera", "computer",
                "tv", "iphone", "phone", "telephone", "telephone_receiver", "pager", "fax", "minidisc", "vhs", "sound", "speaker", "mute", "loudspeaker", "mega",
                "hourglass", "hourglass_flowing_sand", "alarm_clock", "watch", "radio", "satellite", "loop", "mag", "mag_right", "unlock", "lock",
                "lock_with_ink_pen", "closed_lock_with_key", "key", "bulb", "flashlight", "high_brightness", "low_brightness", "electric_plug", "battery", "calling",
                "email", "mailbox", "postbox", "bath", "bathtub", "shower", "toilet", "wrench", "nut_and_bolt", "hammer", "seat", "moneybag", "yen", "dollar",
                "pound", "euro", "credit_card", "money_with_wings", "e-mail", "inbox_tray", "outbox_tray", "envelope", "incoming_envelope", "postal_horn",
                "mailbox_closed", "mailbox_with_mail", "mailbox_with_no_mail", "door", "smoking", "bomb", "gun", "hocho", "pill", "syringe", "page_facing_up",
                "page_with_curl", "bookmark_tabs", "bar_chart", "chart_with_upwards_trend", "chart_with_downwards_trend", "scroll", "clipboard", "calendar", "date",
                "card_index", "file_folder", "open_file_folder", "scissors", "pushpin", "paperclip", "black_nib", "pencil2", "straight_ruler", "triangular_ruler",
                "closed_book", "green_book", "blue_book", "orange_book", "notebook", "notebook_with_decorative_cover", "ledger", "books", "bookmark",
                "name_badge", "microscope", "telescope", "newspaper", "football", "basketball", "soccer", "baseball", "tennis", "8ball", "rugby_football",
                "bowling", "golf", "mountain_bicyclist", "bicyclist", "horse_racing", "snowboarder", "swimmer", "surfer", "ski", "spades", "hearts", "clubs",
                "diamonds", "gem", "ring", "trophy", "musical_score", "musical_keyboard", "violin", "space_invader", "video_game", "black_joker",
                "flower_playing_cards", "game_die", "dart", "mahjong", "clapper", "memo", "pencil", "book", "art", "microphone", "headphones", "trumpet", "saxophone",
                "guitar", "shoe", "sandal", "high_heel", "lipstick", "boot", "shirt", "tshirt", "necktie", "womans_clothes", "dress", "running_shirt_with_sash",
                "jeans", "kimono", "bikini", "ribbon", "tophat", "crown", "womans_hat", "mans_shoe", "closed_umbrella", "briefcase", "handbag", "pouch", "purse",
                "eyeglasses", "fishing_pole_and_fish", "coffee", "tea", "sake", "baby_bottle", "beer", "beers", "cocktail", "tropical_drink", "wine_glass",
                "fork_and_knife", "pizza", "hamburger", "fries", "poultry_leg", "meat_on_bone", "spaghetti", "curry", "fried_shrimp", "bento", "sushi",
                "fish_cake", "rice_ball", "rice_cracker", "rice", "ramen", "stew", "oden", "dango", "egg", "bread", "doughnut", "custard", "icecream", "ice_cream",
                "shaved_ice", "birthday", "cake", "cookie", "chocolate_bar", "candy", "lollipop", "honey_pot", "apple", "green_apple", "tangerine", "lemon",
                "cherries", "grapes", "watermelon", "strawberry", "peach", "melon", "banana", "pear", "pineapple", "sweet_potato", "eggplant", "tomato", "corn",
                "house", "house_with_garden", "school", "office", "post_office", "hospital", "bank", "convenience_store", "love_hotel", "hotel", "wedding", "church",
                "department_store", "european_post_office", "city_sunrise", "city_sunset", "japanese_castle", "european_castle", "tent", "factory", "tokyo_tower",
                "japan", "mount_fuji", "sunrise_over_mountains", "sunrise", "stars", "themoreyouknow", "tmyk", "statue_of_liberty", "bridge_at_night", "carousel_horse", "rainbow",
                "ferris_wheel", "fountain", "roller_coaster", "ship", "speedboat", "boat", "sailboat", "rowboat", "anchor", "rocket", "airplane", "helicopter",
                "steam_locomotive", "tram", "mountain_railway", "bike", "aerial_tramway", "suspension_railway", "mountain_cableway", "tractor", "blue_car",
                "oncoming_automobile", "car", "red_car", "taxi", "oncoming_taxi", "articulated_lorry", "bus", "oncoming_bus", "rotating_light", "police_car",
                "oncoming_police_car", "fire_engine", "ambulance", "minibus", "truck", "train", "station", "train2", "bullettrain_front", "bullettrain_side",
                "light_rail", "monorail", "railway_car", "trolleybus", "ticket", "fuelpump", "vertical_traffic_light", "traffic_light", "warning", "construction",
                "beginner", "atm", "slot_machine", "busstop", "barber", "hotsprings", "checkered_flag", "crossed_flags", "izakaya_lantern", "moyai",
                "circus_tent", "performing_arts", "round_pushpin", "triangular_flag_on_post", "jp", "kr", "cn", "us", "fr", "es", "it", "ru",
                "gb", "uk", "de", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "keycap_ten", "1234", "zero", "hash", "symbols",
                "arrow_backward", "arrow_down", "arrow_forward", "arrow_left", "capital_abcd", "abcd", "abc", "arrow_lower_left", "arrow_lower_right",
                "arrow_right", "arrow_up", "arrow_upper_left", "arrow_upper_right", "arrow_double_down", "arrow_double_up", "arrow_down_small",
                "arrow_heading_down", "arrow_heading_up", "leftwards_arrow_with_hook", "arrow_right_hook", "left_right_arrow", "arrow_up_down", "arrow_up_small",
                "arrows_clockwise", "arrows_counterclockwise", "rewind", "fast_forward", "information_source", "ok", "twisted_rightwards_arrows", "repeat",
                "repeat_one", "new", "top", "up", "cool", "free", "ng", "cinema", "koko", "signal_strength", "u5272", "u5408", "u55b6", "u6307", "u6708", "u6709",
                "u6e80", "u7121", "u7533", "u7a7a", "u7981", "sa", "restroom", "mens", "womens", "baby_symbol", "no_smoking", "parking", "wheelchair", "metro",
                "baggage_claim", "accept", "wc", "potable_water", "put_litter_in_its_place", "secret", "congratulations", "m", "passport_control", "left_luggage",
                "customs", "ideograph_advantage", "cl", "sos", "id", "no_entry_sign", "underage", "no_mobile_phones", "do_not_litter", "non-potable_water",
                "no_bicycles", "no_pedestrians", "children_crossing", "no_entry", "eight_spoked_asterisk", "eight_pointed_black_star", "heart_decoration",
                "vs", "vibration_mode", "mobile_phone_off", "chart", "currency_exchange", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpius",
                "sagittarius", "capricorn", "aquarius", "pisces", "ophiuchus", "six_pointed_star", "negative_squared_cross_mark", "a", "b", "ab", "o2",
                "diamond_shape_with_a_dot_inside", "recycle", "end", "on", "soon", "clock1", "clock130", "clock10", "clock1030", "clock11", "clock1130", "clock12",
                "clock1230", "clock2", "clock230", "clock3", "clock330", "clock4", "clock430", "clock5", "clock530", "clock6", "clock630", "clock7",
                "clock730", "clock8", "clock830", "clock9", "clock930", "heavy_dollar_sign", "copyright", "registered", "tm", "x", "heavy_exclamation_mark", "bangbang",
                "interrobang", "o", "heavy_multiplication_x", "heavy_plus_sign", "heavy_minus_sign", "heavy_division_sign", "white_flower", "100",
                "heavy_check_mark", "ballot_box_with_check", "radio_button", "link", "curly_loop", "wavy_dash", "part_alternation_mark", "trident",
                "black_square", "white_square", "white_check_mark", "black_square_button", "white_square_button", "black_circle", "white_circle", "red_circle",
                "large_blue_circle", "large_blue_diamond", "large_orange_diamond", "small_blue_diamond", "small_orange_diamond", "small_red_triangle",
                "small_red_triangle_down", "shipit"
            ];


            return function (input, userOptions) {

                /**
                 * defaultOptions
                 *
                 * @description
                 * Holds the default configuration of the module.
                 *
                 * @type {Object}
                 */
                var options = {
                    link: true,
                    linkTarget: '_self',
                    image: {
                        embed: false,
                        inline: false
                    },
                    video: {
                        embed: false,
                        width: null,
                        height: null,
                        inline: false,
                        ytTheme: 'dark',
                        ytDetail: false
                    }
                };

                /**
                 * Function extendDeep
                 *
                 * @description
                 * Extends an object to another object using deep analyzing
                 *
                 * @param dst
                 * @returns extended object
                 */

                function extendDeep(dst) {
                    angular.forEach(arguments, function (obj) {
                        if (obj !== dst) {
                            angular.forEach(obj, function (value, key) {
                                if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
                                    extendDeep(dst[key], value);
                                } else {
                                    dst[key] = value;
                                }
                            });
                        }
                    });
                    return dst;
                }

                extendDeep(options, userOptions);

                //Checks for invalid inputs
                //
                if (input === undefined || input === null) {
                    return;
                }
                if (typeof input === "object") {
                    return input;
                }


                /**
                 * FUNCTION insertfontSmiley
                 * @description
                 * Coverts the text into font emoticons
                 *
                 * @param  {string} str
                 *
                 * @return {string}
                 */

                function insertfontSmiley(str) {

                    var a = str.split(' ');
                    angular.forEach(icons, function (icon) {
                        for (var i = 0; i < a.length; i++) {
                            if (a[i] === icon.text) {
                                a[i] = '<span class="icon-emoticon" title="' + icon.text + '">' + '&#x' + icon.code + '</span>';
                            }
                        }
                    });
                    return a.join(' ');
                }


                /**
                 * FUNCTION UrlEmbed
                 * @description
                 * Converts normal links written in the text into html anchor tags.
                 *
                 * @param  {string} text
                 *
                 * @return {string}
                 */

                function urlEmbed(str) {

                    var urlRegex = /((href|src)=["']|)(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

                    var strReplaced = str.replace(urlRegex, function (match) {
                            return '<a href="' + match + '" target="' + options.linkTarget + '">' + match + '</a>';
                        }
                    );
                    return strReplaced;
                }

                /**
                 * FUNCTION insertEmoji
                 *
                 * @description
                 * Converts text into emojis
                 *
                 * @param  {string} str
                 *
                 * @return {string}
                 */

                function insertEmoji(str) {

                    var emojiRegex = new RegExp(":(" + emojiList.join("|") + "):", "g");

                    return str.replace(emojiRegex, function (match, text) {
                        return "<span class='emoticon emoticon-" + text + "' title=':" + text + ":'></span>";

                    });
                }

                /**
                 * Video-embedding
                 *
                 * A default aspect ratio of 4:3 until specified by the user
                 *
                 * @type {{calcDimensions: Function, embed: Function}}
                 */


                var videoProcess = {


                    calcDimensions: function () {
                        var dimensions = {
                            'width': options.video.width,
                            'height': options.video.height
                        };
                        if (options.video.height && options.video.width) {
                            return dimensions;
                        }
                        else if (options.video.height) {
                            dimensions.width = ((options.video.height) / 390) * 640;
                            return dimensions;
                        }
                        else if (options.video.width) {
                            dimensions.height = ((dimensions.width) / 640) * 390;
                            return dimensions;
                        }
                        else {
                            dimensions.width = 640;
                            dimensions.height = 390;
                            return dimensions;
                        }
                    },

                    /**
                     * Video embedding function
                     *
                     * Currently supports vimeo and youtube video embedding
                     *
                     */



                    embed: function (data) {

                        var anchorRegex = /<a[^>]*>([^<]+)<\/a>/g;     //regexp to detect any anchor tag

                        var p = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/ytscreeningroom\?v=|\/feeds\/api\/videos\/|\/user\S*[^\w\-\s]|\S*[^\w\-\s]))([\w\-]{11})[?=&+%\w-]*/gi;

                        /**
                         * Youtube embedding
                         */

                        if (data.match(p)) {
                            var youtubeDimensions = this.calcDimensions();

                            var youtubeVideo = '<div class="emoticons-video"><iframe src="https://www.youtube.com/embed/' + RegExp.$1 + '?theme=' + options.video.ytTheme + '" ' +
                                'frameborder="0" width="' + youtubeDimensions.width + '" height=' + youtubeDimensions.height + ' allowfullscreen></iframe></div>';


                            if (!(options.video.inline)) {
                                data = data.concat(" " + youtubeVideo);
                            }
                            else {
                                /**
                                 * If inline is set to true then
                                 * 1. detect the youtube link in anchor tag and replace whole by embedding url.
                                 *
                                 * @type {RegExp}
                                 */


                                data = data.replace(anchorRegex, function (match, text) {

                                    //compare the text of the matched url with youtube's url

                                    if (text.match(p)) {
                                        return youtubeVideo;
                                    }
                                    return match;


                                });
                            }

                        }

                        /**
                         * Vimeo embedding
                         */

                        var e = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)*/gi;

                        if (data.match(e)) {
                            var vimeoDimensions = this.calcDimensions();

                            var vimeoVideo = '<div class="emoticons-video"><iframe src="//player.vimeo.com/video/' + RegExp.$3 + '?title=0&byline=0&portrait=0" width="' + vimeoDimensions.width + '" height="' + vimeoDimensions.height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';

                            if (!options.video.inline) {
                                data = data.concat(" " + vimeoVideo);
                            }
                            else {
                                data = data.replace(anchorRegex, function (match, text) {
                                    if (text.match(e)) {
                                        return vimeoVideo;
                                    }
                                    return match;
                                })
                            }


                        }

                        return data;
                    }
                };

                /**
                 * Image embedding
                 *
                 * Supports jpg,jpeg,png,gif now
                 *
                 * @type {{embed: Function}}
                 */

                var imageProcess = {
                    embed: function (data) {
                        var i = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/gi;

                        if (data.match(i)) {
                            var image = '<div class="emoticons-image-wrapper"><img class="emoticons-image" src="' + RegExp.$1 + '"/></div>';
                            data = data.concat(" " + image);
                        }

                        return data;
                    }
                };

                /**
                 * All the functions are being called here.
                 */


                input = insertfontSmiley(input);


                input = insertEmoji(input);

                if (options.link) {
                    input = urlEmbed(input);
                }

                if (options.video.embed) {
                    input = videoProcess.embed(input);

                }

                if (options.image.embed) {
                    input = imageProcess.embed(input);

                }

                return $sce.trustAsHtml(input);


            };
        }]);

})();
