export enum TEAM {
  UXUI = 'UX/UI',
  BACKEND = 'Backend',
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

const { UXUI, BACKEND, WEB, ANDROID, IOS } = TEAM;
export const TEAM_LIST = [ UXUI, BACKEND, WEB, ANDROID, IOS ];

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
      comment: 'Mash-Up의 ✨빛과 🧂소금인 UXUI 디자인팀이에요!',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '저희는 포트폴리오부터 아티클, 웹 스터디 등 💪<br/>디자인 벌크업을 위한 다양한 스터디를 진행하고 있어요.<br/>📚 Full stack 디자이너들이 모여 관심있는 디자인 이슈, 트렌드에 관한 정보도 공유하고 있는데요.<br/>Mash Up의 UXUI 디자인팀은, 개인의 성장을 적극적으로 응원한답니다! 🔥🔥',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: '🌞🌝',
    }
  ],
  [BACKEND]: [
    {
      side: 'start',
      commentType: 'text',
      comment: '🙂이번 Back-end팀은 스프링팀과 노드팀으로 운영된다던데...',
      profile: true,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '매하!!🖐개발자의 힘든 겨울을 봄으로 만들어 준 스프링을 사용하는 🌱스프링 팀🌱입니다아악!!',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '스프링팀은 ‘왜 WHY’ 에 집중하고 있습니다.<br/>‘왜 이 기술을 사용하는지’ 에 대한 답을 찾기 위해선 기본기가 중요한 요소로 자리매김하고 있습니다.<br/>기본기를 탄탄하게 쌓아올리는 것이 생각보다 어렵다는 사실을 아는 당신! 스프링 팀과 함께 성장해봐요!!!',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '앗.. 참고로 개라벨을 중시하기 때문에 개발할 땐 열심히하고 놀 땐 열정적으로🔥노는 분들 정.말. 환영합니다. 날씨도 추운데 화끈한 스프링팀에서 몸 좀 녹여보아요🕺🏻',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: '🌱♨️',
    },
    {
      side: 'start',
      commentType: 'text',
      comment: '🤔 Node.js 팀은 어떻게 진행되나요?',
      profile: true,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '매하~ 매쉬업의 떠오르는 샛별 노드팀 입니다! 👏👏',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: "노드팀의 키워드는 '빠른 속도'와 '끊임 없는 증명'입니다~",
    },
    {
      side: 'end',
      commentType: 'text',
      comment: "노드팀의 스터디 방식은 빠르게 기술 서적을 학습하여 내가 '알고 있다'를 꾸준히 증명합니다.<br/>프로젝트 진행 역시, 빠르게 서버를 배포하여 서비스가 올바르게 나아가고 있는지 꾸준히 증명해가는 시간이 되기를 바랍니다!",
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '참! 노드팀에는 매쉬업의 공식 보드 게임러들이 모였습니다! 보드게임 좋아히는 분들 대환영~',
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
      comment: '저희 팀은 리액트를 공부하고 사용하는 사람들이 모여서 매주 토요일 스터디를 진행해요!',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '스터디에서는 각자 공부했던 라이브러리나 그 외 개발 관련 어떤 것이든 함께 이야기하는 Tech talk, 함께 코딩하며 코드 리뷰를 하는 페어 프로그래밍 등을 하며 함께 성장해 나가려고 해요! 우린 팀이니까요',
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
      comment: '저희는 안드로이드 스터디와 프로젝트를 진행하고 있습니다. 관심있는 이슈를 함께 공유하는 자리를 가지며 유연한 스터디를 추구합니다',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '술도 좋아하고 모각코도 좋아하는 사람들과 함께 좋은 곳에서 좋아하는 공부를 하고 좋은 추억을 만들어 갑니다 💘',
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
      comment: '매-하 👋 매시업의 수호자 𝗶𝗢𝗦팀 입니다!\n' +
        '🧝🏻‍♀️🧙🏻‍♀️🦸🏻🦹🏻🧑🏻‍🚀👩🏻‍🎤👨🏻‍🎤🧑🏻‍🎤👮🏻‍♀️🧝🏻🧝🏻‍♂️🧛🏻🧞‍♀️🧚🏻‍♀️🧜🏻',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '저희는 𝑺𝒘𝒊𝒇𝒕를 기반으로 매시업을 수호하고 있는데요.🛡<br/>' +
        '현재까지는 𝐖𝐖𝐃𝐂 스터디🎬, 디자인 패턴 스터디🧩, 𝖲𝗐𝗂𝖿𝗍𝖴𝖨 스터디🐦<br/>' +
        '그리고 다양한 주제로 발표 세미나를 진행해왔습니다.<br/>' +
        '또! 우리 수호자들은 컨퍼런스에도 적극적으로 참여하고, 애플 이벤트도 함께합니다.<br/>' +
        '우리 수호자들은 매우 도전적이며 💪새로운 수호자는 언제나 환영이라구욧!!!',
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
    comment: 'Mash-Up 10기 지원하러 가기! →',
    link: 'https://www.notion.so/Mash-Up-10-2d94745cf6014adfb5e95ddc33dd32dd'
  },
];
