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
          我无时无刻不在想，这个世上如果真的有念念不忘，必有回响就好了。所以我也很庆幸，庆幸于我们能够再次相遇，庆幸于这个世上真的会有奇迹，漫漫长夜也会迎来曙光。
          这么看来我真是个自私的人，但我从心底里喜欢你，不高兴你比喜欢我更喜欢别人。你要是喜欢了别人我会哭，但是还是喜欢你。"
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
          text="你好哇，刘雨霜。想和你度过每个春夏秋冬，想让你成为我们城堡里的公主，想和你在余生一起探索各种各样的事。只要有你在，任何事情都是那么的有趣又令人心动，
          只要有你在，我便对未来充满了期待。我很心急，我很迫不及待，想牵着你的手一起向前走，走的慢了，甚至想跑着去。但又觉得跑向未来又太快了，还是慢慢和你一起享受人生吧。"
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
