import React from 'react';
import Heart from '../Heart';
import { oneImg, twoImg, threeImg, forthImg, fifthImg, sixthImg } from '../../assets';
import './style.less';

const ComposeHeart = () => {
  console.log('123');

  return (
    <div className="composeHeartContainer">
      <div className="firstRow rowElement">
        <Heart
          href={oneImg}
          width="100"
          height="67"
          preserveAspectRatio="xMidYMid slice"
          x="-10"
          id="1"
          text="你好哇，刘雨霜。这是我们认识的多少年了呢？从我们第一次相恋开始，又有谁能想到能发生这么多事情呢。我是坚定的唯物主义者，
          但自从你出现在我的人生中，我却开始想，如果真的存在神明的话，我愿意每天烧香拜佛和你一辈子在一起。可惜这世界上哪儿来这样的好事呢，
          如果真的能这么简单那还好了。或许你会觉得这个世上怎么会有永远这种东西呢，但我想我有什么能坚持的事情的话，那肯定有一件是，我爱你。"
        />
        <Heart
          href={twoImg}
          width="100"
          height="67"
          preserveAspectRatio="xMidYMid slice"
          x="-10"
          id="2"
          text="你好哇，刘雨霜。我一直很后悔，后悔为什么以前会这样子，总是会想如果我不这样，那我们是不是早就有了好的结局。
          这个世上如果念念不忘，真的有回响就好了。所以我也很庆幸，庆幸于我们能够再次相遇，庆幸于这个世上真的会有奇迹，漫漫长夜也会迎来曙光。
          原谅我这么自私，但我从心底里喜欢你，不高兴你比喜欢我更喜欢别人。你要是喜欢了别人我会哭，但是还是喜欢你。"
        />
        <Heart
          href={threeImg}
          width="100"
          height="67"
          preserveAspectRatio="xMidYMid slice"
          x="-10"
          id="3"
          text="你好哇，刘雨霜。我知道我依旧不够好，但我一想到如果以后的人生都有你的陪伴，为了能够在你身边，那我想变得更好。
          因为我早已知道没有你的日子是多么的灰暗，我不想再经历没有你的日子了。你想要天天开心，那我就要让你天天开心。如果你不开心了，那一定是我的罪过。
          怎么能让最爱的你不开心呢！你是非常可爱的人，真应该遇到最好的人，我也真希望我就是。"
        />
      </div>
      <div className="secondRow rowElement ">
        <Heart
          href={forthImg}
          width="100"
          height="67"
          preserveAspectRatio="xMidYMid slice"
          x="-10"
          id="4"
          text="你好哇，刘雨霜。想和你度过每个春夏秋冬，想在夏天给你准备一冰箱的荔枝，想让你成为我们城堡里的公主。
          原谅我语言能力的匮乏，我想和你在余生一起探索各种各样的事，只要有你在，任何事情都是那么的有趣又令人心动。
          一想到这个，我便有点迫不及待了，我想见你，想要拥抱你，想要亲口告诉你，我爱你。我随时都做好了准备。"
        />
        <Heart
          href={fifthImg}
          width="100"
          height="67"
          preserveAspectRatio="xMidYMid slice"
          x="-10"
          id="5"
          text="你好哇，刘雨霜。我不知道这样会不会给你压力，我也有点犹豫了，我没这么想。你要是愿意，我就永远爱你。你要是不愿意，我就永远相思。
          我只是想，我很爱你，我想要告诉你，仅此而已。"
        />
      </div>
      <div className="thirdRow rowElement">
        <Heart
          href={sixthImg}
          width="100"
          height="67"
          preserveAspectRatio="xMidYMid slice"
          x="-10"
          id="6"
          text="这里是文字6哦"
          timePage={true}
        />
      </div>
    </div>
  );
};

export default ComposeHeart;
