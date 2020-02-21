const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: '蝴蝶泉边',
            artist: '黄雅莉',
            url: 'http://music.163.com/song/media/outer/url?id=239682.mp3',
            cover: 'https://p1.music.126.net/yyMuGVix7sQMejkZhFrwPg==/109951163077718442.jpg',
            theme: '#46718b'
        },
        {
            name: '不待',
            artist: '忱忱老板',
            url: 'http://music.163.com/song/media/outer/url?id=1327936784.mp3',
            cover: 'https://p2.music.126.net/7llHCDuxoI2WLjRyfxMGmA==/109951163720396926.jpg',
            theme: '#46718b'
        },
		{
            name: '你笑起来真好看',
            artist: '李昕融/樊桐舟/李凯稠',
            url: 'http://music.163.com/song/media/outer/url?id=1368934278.mp3',
            cover: 'https://p1.music.126.net/INYRP-HGtsDzRjMsF5Z8QQ==/109951164113799784.jpg',
            theme: '#46718b'
        },
		{
            name: '路过人间',
            artist: '郁可唯',
            url: 'http://music.163.com/song/media/outer/url?id=1354477202.mp3',
            cover: 'https://p2.music.126.net/Otu98pBAFmTF1oZtpclyCA==/109951164053279186.jpg',
            lrc: '/./dist/music/lrc/38689229.lrc',
	    theme: '#46718b'
        },
		{
            name: '与火星的孩子对话',
            artist: '华晨宇',
            url: 'http://music.163.com/song/media/outer/url?id=1399533630.mp3',
            cover: 'https://p1.music.126.net/AFmJAcW7jFamQBNF68iKgw==/109951164452907718.jpg',
            lrc: '/./dist/music/lrc/1399533630.lrc',
	    theme: '#46718b'
        },
		{
            name: '最天使',
            artist: '曾轶可',
            url: 'http://music.163.com/song/media/outer/url?id=340383.mp3',
            cover: 'https://p2.music.126.net/u99fHXGn85d8TLjYbPVuUA==/109951163105662267.jpg',
            theme: '#46718b'
        }
    ]
});