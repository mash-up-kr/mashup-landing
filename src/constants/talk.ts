export enum TEAM {
  UXUI = 'UX/UI',
  SPRING = 'Spring',
  NODE = 'Node',
  WEB = 'Web',
  ANDROID = 'Android',
  IOS = 'iOS',
};

export interface TalkItem {
  side: 'start' | 'end' | 'divide';
  commentType?: 'img' | 'text' | 'link';
  comment?: any;
  link?: string;
  profile?: boolean;
}

const { UXUI, SPRING, NODE, WEB, ANDROID, IOS } = TEAM;
export const TEAM_LIST = [ UXUI, SPRING, NODE, WEB, ANDROID, IOS ];

export const TEAM_TALK_LIST: { [key: string]: TalkItem[] } = {
  [UXUI]: [
    {
      side: 'start',
      commentType: 'text',
      comment: '🙂UX/UI팀에 대해 궁금해요!!',
      profile: true,
    },
    {
      side: 'divide',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `Mash-Up의 ✨빛과 🧂소금인 UX/UI 디자인팀이에요!

      저희는 포트폴리오부터 아티클, 웹 스터디 등 💪
      디자인 벌크업을 위한 다양한 스터디를 진행하고 있어요.
      
      📚 Full stack 디자이너들이 모여 관심있는 디자인 이슈, 트렌드에 관한 정보도 공유하고 친목도 다집니다🥰`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `Mash Up의 UX/UI 디자인팀은 함께 성장해 나갈 자기님들을 기다리고 있어요😘

      다양한 디자이너, 개발자분들과 이야기를 나누며 시야를 넓히고 싶다면🤝
      자신의 디자인을 실제 서비스로 발전시키는 경험을 하고 싶다면💪
      디자이너들과 디자인적 고민을 함께 나누고 정보를 교류하고 싶다면🙏
      
      디자인팀의 자기님이 되어주세요💖`,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: '🌞🌝',
    }
  ],
  [SPRING]: [
    {
      side: 'start',
      commentType: 'text',
      comment: `'🙂이번 Back-end팀은 스프링팀과 노드팀으로 운영된다던데...'`,
      profile: true,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `<i>스프링 좋아하지마...
      그게 뭔데...
      ..스프링 좋아하지말라구....
      그거... 어떻게 하는건데......</i>`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '안녕하세봄쥬르~!🙌 Mash-Up의 킹왕짱👑 폭풍간zi🌪️ 스프링 팀🌱입니다.',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `저희 스프링 팀은 "WHY❓"에 집중하고 있습니다.
      "왜 이 기술을 사용하는지"에 대한 답을 찾기 위해선 기본기가 중요한 요소로 자리매김하고 있습니다.
      때문에 저희는 프로젝트와 세미나, 스터디를 통해 기본기에 기반한 기술적 성장을 위해 정진하고 있습니다. 🔥`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `제가 한 번 스프링으로 삼행시 해보겠습니다. 🙋
      <span style='color: #00a86b'>스</span>프링 팀 지원자 여러분! 스프링을 깊게 알아가고 싶은 당신!
      <span style='color: #00a86b'>프</span>로젝트와 세미나, 스터디에 팀워크를 곁들인 스프링팀 성장Story에 함께 하지 않을래요? 
      <span style='color: #00a86b'>링</span>크(지원)를 통해 지금 당신의 이야기를 저희에게 들려주세요!`
    },
    {
      side: 'end',
      commentType: 'img',
      comment: '🌱♨️',
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
      comment: '안녕하세요. 매쉬업의 떠오르는 ⭐️샛별⭐️ 노드팀입니다. 👏👏',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `노드팀의 키워드는 <span style='color: #00a86b'>'빠른 속도'</span>와 <span style='color: #00a86b'>'끊임 없는 증명'</span>입니다!
      노드팀의 스터디 방식은 빠르게 기술을 학습하여 내가 <span style='color: #00a86b'>'알고 있다'</span>를 꾸준히 증명합니다.
      프로젝트도 빠르게 서버를 배포하여 서비스가 올바르게 <span style='color: #00a86b'>'나아가고 있다'</span>를 꾸준히 증명합니다.
      `,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `개발이면 개발! 친목이면 친목! 함께 성장할 동료를 모집합니다~ 🎉
      남녀노소 활발하고 <span style='color: red'>모각코</span>(모여서 각자 코딩) 좋아하시는 분들 대환영입니다!`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `노 노드팀
      드 드루와!!🥊`,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: '🐎🎲',
    },
  ],
  [WEB]: [
    {
      side: 'start',
      commentType: 'text',
      comment: '🙂 Mash-up 웹팀은 어떻게 활동하나요?',
      profile: true,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `철이 없었죠. 자바스크립트를 좋아한다는 것 자체가..
      하지만 걱정하지 말아요. 타입스크립트에도 진심이니까.`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `안녕하세요, Mash-up 웹팀이에요.
      팀 이름이 외자라서
      외로움을 많이 타는 친구죠..
      하지만 걱정하지 말아요
      노는덴 <strong style='color: red'>공격적이니까</strong>`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `저희 Mash-up 웹팀에서는 웹과 관련된 다양한 컨텐츠를 만들거에요!
      리액트와 관련된 세미나부터
      최신 웹 트렌드, 아키텍쳐나 오픈소스 분석같은 스터디도 같이 진행할 예정이에요!
      개발과 친목 모두 잡고 싶은 열정적인 사람이라면 드루와!`,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: '🙌🔥',
    }
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
      comment: `(꺄르륵 꺄르륵)
      아니 어디서 화목한 웃음소리 안들리시나요!! (•᷄ʚ •᷅)( •᷄ө•᷅ )(•᷄ʚ •᷅ )( •᷄ ɞ•᷅)`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `팀원들끼리 사이도 짱좋고 개발왕 찐천재들이 모여있는 이곳은 바로 안드로이드🤖팀입니다-!(<span style='color: #00a86b'>Ta</span>-da!🎉)`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `저희와 함께 서로에게 좋은 영향력을 행하고싶은 안둥이여러분,
      자유롭게 지식을 공유하고 시덥잖은 농담도 주고받고싶은 안둥이여러분,
      지금 당장 지원해주쎄요!!!!`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `안@ 안그래도 좋은 곳
      드@ 드루와!!!!`,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: '🧚🏻🧃',
    }
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
      comment: '이곳인가...? 여깁니다!!!',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `🌏 저세상텐션 저세상으로 가지말고 여기로와!
      🍻 술게임에서 이진탐색을 활용하는 뼈개발자!
      🍎 밤새우면서 애플이벤트 챙겨보는 애플러버!`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `iOS팀에서는 개발에 익숙한 직장인 부터~! 앱개발자를 꿈꾸는 학생들까지~!👨‍💻👩‍💻
      다 같이 모여 서로의 지식을 공유하고 꿈을 키워나가고 있습니당!🦄
      물론 친목도 빠질수 없쥬! 
      코로나 방역 수칙을 지키는 선에서 자잘한 오프라인 모임도 진행할 예정이에요😆`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `iOS 팀에서 친목도 다지고 각자의 목표를 이루시길 바랍니다🥰`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `아! 아직 iOS 앱을 안만들어봤다고?
      오! 오면 만들수 있어!
      스! 스을퍼 하지 말고 드루와🔥`,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: '🧵🧵',
    },
  ],
}

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
    commentType: 'img',
    comment: '💪🏻',
  },
  {
    side: 'divide',
  },
  {
    side: 'end',
    commentType: 'img',
    comment: '🎉',
  },
  {
    side: 'end',
    commentType: 'link',
    comment: 'Mash-Up 11기 지원하러 가기! →',
    link: 'https://www.notion.so/Mash-Up-10-2d94745cf6014adfb5e95ddc33dd32dd'
  },
];
