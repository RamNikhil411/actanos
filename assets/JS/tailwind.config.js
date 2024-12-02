tailwind.config={
    theme:{
        fontFamily:{
            'myriad':['Myriad Pro'],
            'bebasNeue':['Bebas Neue'],
            'inter':['Inter'],
            'dm_sans':['DM Sans'],
            'dark_grotesque':['Darker Grotesque'],
            'Satoshi':['Satoshi'],
            'barlow':['Barlow']
        },
        extend:{
            animation:{
                'loop-scroll':'loop-scroll 50s linear infinite',
            },
            keyframes:{
                'loop-scroll':{
                    from:{transform:'translateX(0)'},
                    to:{transform:'translateX(-100%)'},
                }
            },
            colors:{
                'primary_color':'#EFEFEF',
                'third_color':'#222222'
            },
            screens:{
                '3xl':'2560px'
            }

            
        }
    }
}