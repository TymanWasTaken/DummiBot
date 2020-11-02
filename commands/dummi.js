const {randColor} = require("../funcs.js")
const randomImages = [
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.30.206.206a/p206x206/26907385_1933375816703339_2592414773406880999_n.jpg?_nc_cat=108&ccb=2&_nc_sid=da31f3&_nc_ohc=BpBCCnb_Rr4AX9ff6yC&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=c6fde27603b43eebdb48746b2d3c0699&oe=5FC4158A',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.56.206.206a/p206x206/14671250_1329450857095841_4713978811247016865_n.jpg?_nc_cat=106&ccb=2&_nc_sid=da31f3&_nc_ohc=hyYRA6vY6SQAX-m2Lb1&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=d7ab2aeb27920adf6f6913cc1409848e&oe=5FC33F7F',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t31.0-0/c0.74.206.206a/p206x206/11021379_932118673495730_2724709174304178441_o.jpg?_nc_cat=104&ccb=2&_nc_sid=da31f3&_nc_ohc=ESCJtprNRjwAX8MoH59&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=52f6a80f38cc92aa884a901e635a621b&oe=5FC6332E',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/63448_873847069322891_892045572588660680_n.jpg?_nc_cat=100&ccb=2&_nc_sid=da31f3&_nc_ohc=Anm-UEbQVd0AX9gr5Br&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=66b36de183517664a45c9ef397898ab2&oe=5FC3BABE',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/10639517_870635256310739_4823042362320890160_n.jpg?_nc_cat=103&ccb=2&_nc_sid=da31f3&_nc_ohc=2IuLR7qOU20AX8uyg19&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=630e6955efe40c5b9a6ebab9c6159e98&oe=5FC27F35',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/1979742_870635232977408_5821221696814084261_n.jpg?_nc_cat=107&ccb=2&_nc_sid=da31f3&_nc_ohc=Gy__QOJEJEwAX8pxLPk&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=f926512426e6e1d1d16bbaa52ca4a650&oe=5FC31B50',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.23.206.206a/p206x206/1382376_639813496059584_783522827_n.jpg?_nc_cat=106&ccb=2&_nc_sid=da31f3&_nc_ohc=KTYQkEhK5LwAX-cwG45&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=90a3fb6ad07bda225b0a684bc36f0658&oe=5FC44EDA',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t31.0-0/c34.0.206.206a/p206x206/966424_573420962698838_2037720754_o.jpg?_nc_cat=105&ccb=2&_nc_sid=da31f3&_nc_ohc=_fMCHW-x_I0AX8PAHPb&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=66af08521fa67563e8fa371b4f31a73f&oe=5FC5058F',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t31.0-0/c0.23.206.206a/p206x206/966842_572333106140957_647877108_o.jpg?_nc_cat=102&ccb=2&_nc_sid=da31f3&_nc_ohc=sVK9kjPkJZcAX_gNSoM&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=67830734f7722886086c90e0e3b927ee&oe=5FC5EF48',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t31.0-0/c34.0.206.206a/p206x206/291417_496954550345480_586513715_o.jpg?_nc_cat=105&ccb=2&_nc_sid=da31f3&_nc_ohc=HSYexDIR9o0AX-W6fM8&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=c549cc369c4852740896208285fb473f&oe=5FC443D7',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t31.0-0/c34.0.206.206a/p206x206/178662_476851732355762_2138579521_o.jpg?_nc_cat=105&ccb=2&_nc_sid=da31f3&_nc_ohc=stHnPVnuFOcAX_IEgim&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=12c878a52741ba26c295fa1d9ae3adc6&oe=5FC2DDCE',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/418483_451719211535681_2048778670_n.jpg?_nc_cat=102&ccb=2&_nc_sid=da31f3&_nc_ohc=_WJluUsykfsAX-tGLjT&_nc_oc=AQnPH7rKdFlV986S9If4pqZt7lCbHRu3G2_RZ8kjhtG5IGChKVvaETsqN-o0HiWxxg5IAX8GeQ8IlNYc5SdjghDJ&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=de90a5d06375c734fb5bad7cbfda8e4b&oe=5FC38FBE',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t31.0-0/c34.0.206.206a/p206x206/242415_210834782290793_4695763_o.jpg?_nc_cat=110&ccb=2&_nc_sid=da31f3&_nc_ohc=U3wuRNcg_JoAX_2h5Bo&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=e29a38cf11c809b03af209cdb8d435db&oe=5FC53FDB',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t31.0-8/324242_3901635138664_1825867903_o.jpg?_nc_cat=106&ccb=2&_nc_sid=2c4854&_nc_ohc=js9lb2pTELgAX93nqVv&_nc_ht=scontent.fbru5-1.fna&oh=8b08f7c478c8f8cc27b24ffb23553711&oe=5FC351E1',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/13533004_1832193830342718_3015456349566771315_n.jpg?_nc_cat=106&ccb=2&_nc_sid=da31f3&_nc_ohc=E2PcVdtAFhgAX_Wpqly&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=29464254449b20097df4335f8f2c111a&oe=5FC26803',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/13507018_1832193827009385_8891370201323219717_n.jpg?_nc_cat=105&ccb=2&_nc_sid=da31f3&_nc_ohc=p17kRNCkGIAAX-Zhtfp&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=328c550949fd0fda4506a2feb450765e&oe=5FC4FBA4',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.23.206.206a/p206x206/13533088_1832193823676052_977196593342378673_n.jpg?_nc_cat=110&ccb=2&_nc_sid=da31f3&_nc_ohc=jbKfGWQmt04AX-mFSxJ&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=eb68588f7d7300a5ad871136aaeb0193&oe=5FC5DE1B',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/13529237_1832193813676053_2198957004441511303_n.jpg?_nc_cat=107&ccb=2&_nc_sid=da31f3&_nc_ohc=hRGnKxFOe_MAX8mHLPH&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=8ccf932c751d6cae1d3ae75a37e840aa&oe=5FC4EA55',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/75402094_2573307152898045_8564852275049136128_o.jpg?_nc_cat=109&ccb=2&_nc_sid=da31f3&_nc_ohc=mQsQPSCPsmEAX8-_QTt&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=eb02a4ff16824172c6b3436824006497&oe=5FC3E1E5',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123296623_113049670602891_487990090517826847_o.jpg?_nc_cat=104&ccb=2&_nc_sid=da31f3&_nc_ohc=yknSkZnMfJkAX-Imfit&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=3b7142a3408a2df66f19dcca50adefbc&oe=5FC58173',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123246451_113049643936227_7604151789323040170_o.jpg?_nc_cat=106&ccb=2&_nc_sid=da31f3&_nc_ohc=H5x0Z1bXePEAX991lEs&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=75efbf4267b72acc1ab9e3c2c0d584ba&oe=5FC5EDC6',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123394158_113049637269561_3374814333157975995_o.jpg?_nc_cat=108&ccb=2&_nc_sid=da31f3&_nc_ohc=e5j7SxNZ9HEAX_DPMFk&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=baffe5c15ff9975445555fd2c14feb45&oe=5FC3B0F6',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123466210_113049517269573_1410421715982651625_o.jpg?_nc_cat=106&ccb=2&_nc_sid=da31f3&_nc_ohc=ZkzdHwsUwOoAX8Lx0-3&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=af6bb7cc1f7a3137952ebe1426ad86cb&oe=5FC5BC32',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123261215_113049520602906_8797788336419340054_o.jpg?_nc_cat=107&ccb=2&_nc_sid=da31f3&_nc_ohc=QOOhIMWJQU4AX9BHJNf&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=f0f1a56d4e8661f3110ecb62243ff800&oe=5FC58B08',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123302421_113049523936239_3383390126091497664_o.jpg?_nc_cat=109&ccb=2&_nc_sid=da31f3&_nc_ohc=YtguQSdVii4AX9hkgC8&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=815da34e052b40a21db9a5cb15b14dc5&oe=5FC3E646',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123245260_113049503936241_5691395452774496777_o.jpg?_nc_cat=100&ccb=2&_nc_sid=da31f3&_nc_ohc=QaV3iMsuADQAX-gyI3b&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=ff27c98899bc834d2b1d7f6d8bf0aa05&oe=5FC43F75',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c69.0.206.206a/p206x206/123283256_113049473936244_2055117060841187861_o.jpg?_nc_cat=108&ccb=2&_nc_sid=da31f3&_nc_ohc=GdnGA4CAFt8AX9_h-UZ&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=ecfe2fe666143b3b9b3a1d1c8af8c75d&oe=5FC59D3B',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123270753_113049457269579_3357072430808793959_o.jpg?_nc_cat=105&ccb=2&_nc_sid=da31f3&_nc_ohc=VQwFabyrhTEAX9payxf&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=ca13bc5c15194d519455d9b94c0801b5&oe=5FC2C504',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123551477_113049430602915_806245565522961339_o.jpg?_nc_cat=104&ccb=2&_nc_sid=da31f3&_nc_ohc=BvQJT4qw85UAX9reHr2&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=f8449137959c0acc94348233d26701c8&oe=5FC3431E',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123297224_113049393936252_8063249467408333926_o.jpg?_nc_cat=104&ccb=2&_nc_sid=da31f3&_nc_ohc=dghkYZwIWKkAX9WnLFX&_nc_oc=AQlN5bfbzl7vMeyHi2oK8qSnjPdwGxGxDSmY9LswecrykvkkHopVZz9saQBL6ZYU6kGYDqawS0m2IE-FvDKgW-Eo&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=03f3bf4fc995ecf8d5464ae2b9522936&oe=5FC2A915',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123408530_113049383936253_3009391289686648815_n.jpg?_nc_cat=102&ccb=2&_nc_sid=da31f3&_nc_ohc=wVoGc2oNOpAAX94oqZp&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=0f73dabc2fe5333e1f0cfa74744f3c88&oe=5FC53B82',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123260495_113049367269588_70533100935440101_n.jpg?_nc_cat=103&ccb=2&_nc_sid=da31f3&_nc_ohc=A25jwf9jiiUAX9mAwkF&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=c3df09643975bb36dfb2f1d4aba876b7&oe=5FC25E06',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.23.206.206a/p206x206/123206102_113049310602927_1195497289542254862_n.jpg?_nc_cat=100&ccb=2&_nc_sid=da31f3&_nc_ohc=JR-6tssAZIsAX9Lk5UQ&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=b4445a7f61fad37101a3b769b8483dc4&oe=5FC27F8C',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123191334_113049317269593_8972373384221397316_o.jpg?_nc_cat=110&ccb=2&_nc_sid=da31f3&_nc_ohc=Tlq1ItFS-DkAX-YeIry&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=b411d4f7e03c8b1f148eca26e999163b&oe=5FC2F0F7',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123283256_113049307269594_4111302017755213201_o.jpg?_nc_cat=102&ccb=2&_nc_sid=da31f3&_nc_ohc=0QCCPWlzrzEAX8v-67k&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=9fff6e17ace894318c6e5578d73038a2&oe=5FC48708',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123337447_113049293936262_1693173765473120406_o.jpg?_nc_cat=100&ccb=2&_nc_sid=da31f3&_nc_ohc=QEfbkyky6IYAX_cSR_J&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=4348fc81c571e40876ea72417f786c5a&oe=5FC2CC05',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c80.0.206.206a/p206x206/123499166_113049263936265_1052689519852513256_o.jpg?_nc_cat=109&ccb=2&_nc_sid=da31f3&_nc_ohc=pP0Af_VtHuwAX-tIHMo&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=610594e10bebf0db47d0b9644814a38a&oe=5FC2888A',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.23.206.206a/p206x206/123338008_113049227269602_5318880679396162623_n.jpg?_nc_cat=108&ccb=2&_nc_sid=da31f3&_nc_ohc=auZWoVduaOYAX8jqPyO&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=bb10c7d601b59466a8e0938950cd304b&oe=5FC25E84',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.53.206.206a/p206x206/123307965_113049213936270_139588664720888994_n.jpg?_nc_cat=111&ccb=2&_nc_sid=da31f3&_nc_ohc=5JqG6PNMl8AAX-qYaBW&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=06efc18d336e241024f80e59d50754d6&oe=5FC5A6AE',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123295706_113049207269604_1135651550804364013_n.jpg?_nc_cat=105&ccb=2&_nc_sid=da31f3&_nc_ohc=R4BsT0SASrsAX-x9b62&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=302db4b0a318c5244621ffb56532cdda&oe=5FC4F9FF',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/p206x206/123207069_113048527269672_5779079099796880127_n.jpg?_nc_cat=105&ccb=2&_nc_sid=da31f3&_nc_ohc=FUlFYwBg5owAX8lc28-&_nc_ht=scontent.fbru5-1.fna&tp=6&oh=97fa65847458c5fb0dfc4a359ac1d726&oe=5FC299C6',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c80.0.206.206a/p206x206/123207080_113054610602397_1442487188383032451_o.jpg?_nc_cat=102&ccb=2&_nc_sid=da31f3&_nc_ohc=MtXNa54o49MAX8CtWrX&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=8a3c21f005dae249b5a5e936fe2e9b53&oe=5FC624DE',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.53.206.206a/p206x206/123570172_113054613935730_8206691869763247015_o.jpg?_nc_cat=110&ccb=2&_nc_sid=da31f3&_nc_ohc=yxXXIY7PvXoAX-PUrLW&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=79950b079e3dd1236f228199e4348892&oe=5FC321FA',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.53.206.206a/p206x206/123394161_113054630602395_4207331222271843045_o.jpg?_nc_cat=103&ccb=2&_nc_sid=da31f3&_nc_ohc=sUHDKCMfvA4AX_Y-_d6&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=80957cc0e99df25119f03d7f32df1a93&oe=5FC528B2',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.23.206.206a/p206x206/123227052_113054673935724_1582432317736501772_o.jpg?_nc_cat=103&ccb=2&_nc_sid=da31f3&_nc_ohc=BBCKEjG5m54AX-1uSXj&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=7f59ecc14aff1d15efe2d7324d06a9e1&oe=5FC51C98',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123196160_113054703935721_1713846791749968406_o.jpg?_nc_cat=105&ccb=2&_nc_sid=da31f3&_nc_ohc=PdwqfNMv3B4AX-ES1RM&_nc_oc=AQliEG9k2GJMwZ8DkqZ4yOTxq6TS35mcbcjkNmP2Os2KBGlz9gZrvUy4mkhjMacCowLDaw7F8CYaz6r4869UzjQw&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=bab676504719da57c094ef24c7949918&oe=5FC3C598',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123443312_113054717269053_1396428036326951597_o.jpg?_nc_cat=105&ccb=2&_nc_sid=da31f3&_nc_ohc=MuqAz1NdMS0AX_sIUJO&_nc_oc=AQnOGQBWRIFDmnf-LDgm1F5cAWk8LhiIIoQfba9SS4QgyJc3AxNiAHXn4XyXxD2WQk8megJn2Q5eBf6DJrFP3Ocy&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=2f2fb1aa95091fd37b0115a676a84549&oe=5FC58C80',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123338179_113054720602386_688587176533613028_o.jpg?_nc_cat=110&ccb=2&_nc_sid=da31f3&_nc_ohc=GcWxzikqtqQAX_jlu4v&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=6674772335d1d73b71bce847d2800635&oe=5FC43626',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123191692_113054783935713_3396258785628327705_o.jpg?_nc_cat=110&ccb=2&_nc_sid=da31f3&_nc_ohc=0AZgXnEj4NwAX-4z2iY&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=dfdbf7808a1f18c1213b22636d29fce8&oe=5FC62F03',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123495923_113054823935709_2381789541570380043_o.jpg?_nc_cat=111&ccb=2&_nc_sid=da31f3&_nc_ohc=VrgTOyeqMBwAX-rnEeD&_nc_oc=AQncQ2fnLhQpTbp9lY1d6O7yqgAbp1zZbm2cjZQKUiZlaQjHa4wL7eQSNwqXQF6VqbnyQVYMU1iYzkXu5b_VT5nt&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=bc2ba83ef72974b667d55d897753d271&oe=5FC36E4B',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123328973_113054827269042_4716024772598268085_o.jpg?_nc_cat=102&ccb=2&_nc_sid=da31f3&_nc_ohc=VWR8jTCLgIUAX-d_KeG&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=9c360c5aaba60b93f2c83c54561162ed&oe=5FC3F1C5',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123507945_113054857269039_3811721726711664934_o.jpg?_nc_cat=108&ccb=2&_nc_sid=da31f3&_nc_ohc=Jj4xlSjWna4AX8Z74Vo&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=b21d86488c62068358fdae6e153180bf&oe=5FC5F4CF',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123206422_113054883935703_3827869312236847037_o.jpg?_nc_cat=100&ccb=2&_nc_sid=da31f3&_nc_ohc=rlpSPQjPaFgAX9OWZpC&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=0f756e6fb9afc6f0ef503d9732276e83&oe=5FC5E90E',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123317065_113054890602369_1764290680895612057_o.jpg?_nc_cat=111&ccb=2&_nc_sid=da31f3&_nc_ohc=LSHzqBfP9y0AX8UiFrI&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=9eb62858d583c0fbcf8d6bb08a684ff3&oe=5FC26078',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123220685_113054923935699_4369521984241251120_o.jpg?_nc_cat=107&ccb=2&_nc_sid=da31f3&_nc_ohc=R2HI9djGfBoAX--wTNp&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=83857d41876572685401e01060c7d5da&oe=5FC573B6',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.23.206.206a/p206x206/123412107_113054930602365_8864100361365929329_o.jpg?_nc_cat=101&ccb=2&_nc_sid=da31f3&_nc_ohc=tphIwktirDUAX-VvEEO&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=60891b92bd42640017f870c03a2e8e7d&oe=5FC322F8',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.23.206.206a/p206x206/123400103_113054947269030_3406558715878522089_o.jpg?_nc_cat=101&ccb=2&_nc_sid=da31f3&_nc_ohc=nlIVJq_AM-IAX87Cnp8&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=c33df43013e00e5378cceb296421d3cf&oe=5FC26410',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123394161_113055360602322_4362277949405326854_o.jpg?_nc_cat=109&ccb=2&_nc_sid=da31f3&_nc_ohc=E-PZApyGpUUAX_zEg4P&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=66f01d0b1d63d79e0f006b0a0bed8f2c&oe=5FC45866',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c34.0.206.206a/p206x206/123331480_113055407268984_8705872165678582918_o.jpg?_nc_cat=102&ccb=2&_nc_sid=da31f3&_nc_ohc=aUyGOszWJggAX-_AgM0&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=6b3b36e7e1db41ec054455494d7b30b0&oe=5FC37AD2',
    'https://scontent.fbru5-1.fna.fbcdn.net/v/t1.0-0/c0.23.206.206a/p206x206/123323868_113055423935649_7939529875670128952_o.jpg?_nc_cat=101&ccb=2&_nc_sid=da31f3&_nc_ohc=SO98ydy_1qUAX_-gi2c&_nc_ht=scontent.fbru5-1.fna&tp=27&oh=aebd2e56b4d83620f84b898aa0c0d0cb&oe=5FC50F3D'

]
const randomFooters = [ 
    "Dummi was born on the 13th of may \n2005 and died on 19th of august 2019.",
    "Dummi loved water!",
    "Dummi was born on friday the 13th.",
    "Dummi weighed over 7kilograms (15 pounds).",
    "Dummi loved dressing up!",
    "Dummi was actually called 'dummi' \nbecause of his stupidity."

]
Discord = require("discord.js")
module.exports = {
	name: 'dummi',
	category: 'support',
	description: 'Get a random picture of Dummi.',
	async execute(message, args) {
        const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
        const randomFooter = randomFooters[Math.floor(Math.random() * randomFooters.length)];
		let embed = new Discord.MessageEmbed()
		.setTitle(`Here have a picture of me...`)
        .setImage(randomImage)
        .setFooter('This command is in memory of Dummi.\nFun fact: ' + randomFooter)
        .setColor(randColor())
        
		await message.channel.send(embed);
	},
};