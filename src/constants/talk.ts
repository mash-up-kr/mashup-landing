export enum TEAM {
  PRODUCT_DESIGN = 'Product Design',
  SPRING = 'Spring',
  NODE = 'Node',
  WEB = 'Web',
  ANDROID = 'Android',
  IOS = 'iOS',
}

export interface TalkItem {
  side: 'start' | 'end' | 'divide';
  commentType?: 'emoji' | 'text' | 'link' | 'img';
  comment?: any;
  link?: string;
  profile?: boolean;
}

const { PRODUCT_DESIGN, SPRING, NODE, WEB, ANDROID, IOS } = TEAM;
export const TEAM_LIST = [PRODUCT_DESIGN, SPRING, NODE, WEB, ANDROID, IOS];

export const TEAM_TALK_LIST: { [key: string]: TalkItem[] } = {
  [PRODUCT_DESIGN]: [
    {
      side: 'start',
      commentType: 'text',
      comment: '프로덕트 디자인팀이 궁금해요! 👀',
      profile: true,
    },
    {
      side: 'divide',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `안녕하세요😊 Mash-Up의 ✨빛과 🧂소금인 프로덕트 디자인팀이에요! 🧚‍♀️`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `우리는 포트폴리오부터 아티클, 웹 스터디 등 💪
      디자인 벌크업을 위한 다양한 스터디를 진행하고 있어요.

      📚 Full stack 디자이너들이 모여 관심있는 디자인 이슈, 트렌드에 관한 정보도 공유하고 친목도 다집니다🥰🍻`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `Mash Up의 프로덕트 디자인팀은 함께 성장해 나갈 🧚‍♀️ 요정님들을 기다리고 있어요😘

      다양한 디자이너, 개발자분들과 이야기를 나누며 시야를 넓히고 싶다면!🤝
      자신의 디자인을 실제 서비스로 발전시키는 경험을 하고 싶다면!💪
      디자이너들과 디자인적 고민을 함께 나누고 정보를 교류하고 싶다면!🙏`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `프로덕트 디자인팀의 뉴비 요정님이 되어주세요💖`,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'product-design1.gif',
    },
    {
      side: 'end',
      commentType: 'emoji',
      comment: '🌞🌝',
    },
  ],
  [SPRING]: [
    {
      side: 'start',
      commentType: 'text',
      comment: `'🙂스프링팀에 대해 궁금해요!!'`,
      profile: true,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'spring-1.png',
    },
    {
      side: 'end',
      commentType: 'text',
      comment:
        '안녕하세yo~! 🙌🏻 Mash-Up의 오나전 지대 킹왕짱 폭풍간zi 인싸(가 되고 싶은) 스프링팀🌱 입니다.',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `저희 스프링 팀은 "WHY❓"에 집중하고 있습니다.
      "왜 이 기술을 사용하는지"에 대한 답을 찾기 위해선 기본기가 중요합니다.
      그렇기에 저희는 프로젝트와 세미나, 스터디를 통해 탄탄한 기본기를 만들고 이를 기반한 기술적 성장을 위해 정진하고 있습니다. `,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `제가 한 번 스프링으로 삼행시 해보겠습니다.
      <strong>스!</strong> 프링을 깊게 알아가고 싶은 당신!
      <strong>프!</strong>로젝트와 세미나, 스터디에 팀워크를 곁들인 스프링팀 성장 Story에 함께 하지 않을래요?
      <strong>링!</strong>크(지원)를 눌러눌러~!!`,
    },
    {
      side: 'end',
      commentType: 'emoji',
      comment: '👑 🌱',
    },
  ],
  [NODE]: [
    {
      side: 'start',
      commentType: 'text',
      comment: '🤔 Node.js 팀은 어떻게 진행되나요?',
      profile: true,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '안녕하세요! Mash-Up의 다크호스(로 거듭날 👊👊), 노드팀을 소개합니다!',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `첫 번째, 빠르고 민첩하게 🏄‍♀️
      폭넓은 개발 생태계와 가벼우면서도 강력한 언어로 필요한 기능을 빠르게 구현해봐요. 🧐`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `두 번째, 연습은 실전처럼 🔥
      동아리 프로젝트라서 가벼울거라는 생각은 금물! 코드 리뷰와 도커를 활용한 배포까지, 실전같은 End-to-End 개발 프로세스를 지향해요. 🔨⚙️🪚`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `세 번째, 개발은 모두함께 👥
      개발은 혼자해도 재밌지만 모여서 하면 더 재밌답니다! 서로 아는 것을 공유하고 모르는 것을 배워가면서 함께 성장해요.  🤸‍♂️🤾‍♂️🤼‍♂️`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `Mash-Up 크루 들과 게임 등 같이 취미 생활을 즐기며 알찬 시간을 보내실 분들!
      지금 당장 지원해주세요~~`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `<strong>노</strong>@ 드팀과 함께 토크토크 하며
      <strong>드</strong>@ 넓은 개발의 세계로~!`,
    },
    {
      side: 'end',
      commentType: 'emoji',
      comment: '🐎🎲',
    },
  ],
  [WEB]: [
    {
      side: 'start',
      commentType: 'text',
      comment: `<i>"왜 울었는데...."</i>`,
      profile: true,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `<i>"......양파 썰다가"</i>`,
    },
    {
      side: 'start',
      commentType: 'text',
      comment: `<i>"왜 울었냐고"</i>`,
      profile: true,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `<i>"양파 때문이라고 대답했어"</i>`,
    },
    {
      side: 'start',
      commentType: 'text',
      comment: `<i>"Web이 양파냐...."</i>`,
      profile: true,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'web.jpeg',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `안녕하세요~🙌 &nbsp Mash-up의 떠오르는 태양 웹팀이에요! ☀️`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `저희 웹팀에서는 세미나를 통한 지식공유부터 웹 기술과 관련된 스터디, 타 플랫폼과 협업하여 진행하는 포트폴리오 스터디 등의 다양한 활동들을 통해 꾸준한 성장을 추구하고 있어요!`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `하지만 걱정하지 마세요 노는데도 <strong style='color: red'>진심이니까</strong>
      모각코, 게임, 회식 등 코로나 방역 수칙을 지키는 선에서 친목도 아주 탄탄하게 다지고 있답니다 🥰
      `,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `Web때문에 울고 웃으며 함께 성장해나갈 바로 당신!! 망설이지 말고 지원 Go Go~! 😎`,
    },
    {
      side: 'end',
      commentType: 'emoji',
      comment: '🙌🔥',
    },
  ],
  [ANDROID]: [
    {
      side: 'start',
      commentType: 'text',
      comment: '🙂 Android팀은 어떻게 활동하나요?',
      profile: true,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `안녕하세요! <strong>개발과 친목을 둘다 챙길 욕심꾸러기</strong> 안드로이드 🤖  팀입니다.
      다양한 스터디들과 세미나, 프로젝트들을 통해 성장 해나가면서 동시에 친목🏄 을 다지고 있어요!`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `저희와 함께 서로에게 좋은 영향력을 주고 싶은 분들!
      열정있게!🔥 참여하실 수 있으신 분들!
      자유롭게 지식을 공유하고 시덥잖은 농담도 주고받고 싶은 분들!
      Mash-Up 크루 들과 게임 등 같이 취미 생활을 즐기며 알찬 시간을 보내실 분들!
      지금 당장 지원해주세요오오!!!!!`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `<strong style='color: #8bf56e'>안</strong>@ 안드로이드 팀과 함께
      <strong style='color: #8bf56e'>드</strong>@ 드라이브가자!!!!! 🚘`,
    },
    {
      side: 'end',
      commentType: 'emoji',
      comment: '🧚🏻',
    },
  ],
  [IOS]: [
    {
      side: 'start',
      commentType: 'text',
      comment: '🙂 iOS팀에 대해 궁금해요!!',
      profile: true,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '안녕 귀여운 애플둥이들?? 여기는 바로 당신을 위한 곳 아! 오! 스!! 🍎🍎 ❤️❤️',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'ios-1.gif',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `😮‍💨 혼자 iOS 개발하면서 힘들었나?
      😎 개발하다가 스트레스 풀 곳이 없었나??!
      👀 밤새면서 같이 애플 이벤트 볼 친구도 없었나???
      그렇다면 당신!! 당장 iOS 팀으로 달려와~~~❤️❤️`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `직장인이라고?👨🏻‍💻 대학생이라고?🧑🏻‍🎓 모두 상관없으니까 일단 iOS 앱 개발자 꿈꾸는 사람이라면 모두 드루와!
      친목이라면 친목, 스터디라면 스터디 모두 잡을 수 있는 유일한 iOS 팀 💘
      코로나 방역 수칙을 지키는 선에서 자주 오프라인으로도 모일 예정이니까 일단 고민말고 고! 🏃‍♂️`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `iOS팀에서는 열정 넘치는 당신을 기다리고 있다규 🔥❣️ `,
    },
    {
      side: 'end',
      commentType: 'emoji',
      comment: '🍎🥰',
    },
  ],
};

export const JOIN_US_TALK: TalkItem[] = [
  {
    side: 'start',
    commentType: 'text',
    comment: '좋아!!!!',
    profile: true,
  },
  {
    side: 'start',
    commentType: 'text',
    comment: '당장 지원하러 갈게요!!!',
  },
  {
    side: 'start',
    commentType: 'emoji',
    comment: '💪🏻',
  },
  {
    side: 'divide',
  },
  {
    side: 'end',
    commentType: 'emoji',
    comment: '🎉',
  },
  {
    side: 'end',
    commentType: 'link',
    comment: 'Mash-Up 12기 지원하러 가기! →',
    link: 'https://www.notion.so/Mash-Up-10-2d94745cf6014adfb5e95ddc33dd32dd',
  },
];
