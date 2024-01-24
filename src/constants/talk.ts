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
      commentType: 'img',
      comment: 'design1-min.png',
    },
    {
      side: 'start',
      commentType: 'text',
      comment: '그쪽도 프.디.팀을 아세요~??',
      profile: true,
    },

    {
      side: 'start',
      commentType: 'text',
      comment: '안녕하세요 💖Mash-Up 공식 공주와 왕자들, 프로덕트 디자인팀💖이에요',
    },
    {
      side: 'start',
      commentType: 'text',
      comment: 'mash-up은 👑 프디팀 👑 과 🤖다른 팀들🤖로 구성되어 있다고 할 수 있어용~!!',
    },
    {
      side: 'start',
      commentType: 'text',
      comment: `🔥최 . 강 . 프 . 디🔥
      서비스 기획부터 문제 정의, 가설 설정, 솔루션 도출, 검증까지 프로덕트의 전체 사이클을 경험할 수 있어요.`,
    },
    {
      side: 'start',
      commentType: 'text',
      comment: `저희 프디팀은 기수내 프로젝트를 주도적으로 진행하며 함께 성장하실 분들을 기다리고 있습니다.

      - 반복된 업무에 지쳐 재미있는 프로젝트를 함께 해보고 싶다면!
      - 개발자들과 협업해 좋은 포트폴리오를 쌓고 싶다면!
      - 반짝이는 아이디어를 생각에서 그치는 것이 아니라, 세상에 출시해 보고싶다면!`,
    },
    {
      side: 'start',
      commentType: 'text',
      comment:
        '프로젝트도 하고, 스터디도 하고, 페스티벌, 전시회 가기 등 문화생활까지 함께 즐거운 추억 쌓아보아요!!',
    },
    {
      side: 'start',
      commentType: 'text',
      comment: '나다 싶으면 지원을 해.야.지🌸',
    },
    {
      side: 'start',
      commentType: 'img',
      comment: 'design2-min.png',
    },
  ],
  [SPRING]: [
    {
      side: 'start',
      commentType: 'text',
      comment: `스프링팀은 어떤 팀인가요? 😮`,
      profile: true,
    },
    {
      side: 'divide',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'spring-1-min.png',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '안녕하세요 Mash-Up의 뜨거움 그자체, Spring 팀입니다🔥',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `저희 스프링팀은 늘 기술적, 경험적 성장에 집중하고 있습니다.
      ”모르는 것을 타파하기 위해, “새로운 것을 적용해보기 위해”, “나 뿐만이 아닌, 함께 성장하기 위해”,
      이러한 열정을 Spring 팀에서는 프로젝트, 세미나, 스터디를 통하여 꾸준한 개발자로서의 성장을 추구하고 있습니다! 🌱`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `이처럼 열정 가득한 Spring팀이기 때문에
      개발을 할 때도 진심모드,
      놀 때도 노는 것에 대해 회식과 번개, 진심모드 ON! 💡`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment:
        'Spring에 대한 열정을 가지고 함께의 성장을 아시는 분들이라면 저희와 함께 단체로 불태우는 것은 어떠신가요!?',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '어여 지원하셔서 사람과 성장 모두 가져가세요🔥',
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
      side: 'divide',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '안녕하세요! Mash-Up의 막둥이팀 Node팀을 소개합니다!',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `첫 번째,  적극적으로⚔
      빠르게 변화하고 있는 생태계에 적극적으로 뛰어들어 다양한 기술에 대해 경험해요🏇🚴‍♀️
      `,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `두 번째, Deep하게🥽
      겉핥기 식 공부는 그만! 팀원들과의 소통과 코드리뷰로 실전에서도 써먹을 수 있는 Deep한 경험을 지향합니다🏄‍♂️🏄‍♀️`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `세 번째, 함께👨‍👩‍👧‍👦
      개발은 혼자 해도 재밌지만 모여서 하면 더 재밌다구요~! 공유하는 문화로 함께 성장해나가요💪💪`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `Mash-Up과 함께 개발의 세계로 깊숙히 여행을 떠나실 NEW크루는 바로 당신!
      지금 당장 JOIN US!`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `<strong>노</strong>@ 드팀과 함께 자
      <strong>드</strong>@ 과자~`,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'node-1-min.png',
    },
  ],
  [WEB]: [
    {
      side: 'end',
      commentType: 'text',
      comment: 'Web이 뭐라고 생각하세요?',
    },
    {
      side: 'divide',
    },
    {
      side: 'start',
      commentType: 'text',
      comment: '웹이요? 디자인/서버와의 호흡, 화합…',
      profile: true,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '아니?',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'web-1-min.gif',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '🎼🎹🥁🎷🎺 샵↘빱↗‼️~뚜비두밥↘~두비두비뚜비두바↗압↘~ 🎻🎹🥁🎷🎺',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `안녕하세요~!! Mash-Up의 슈퍼🎖️스타 Web팀입니다!! 🌝
      명불허전 자타공인 웹 장인들🧘‍♂️과 함께 성장하실 분을 찾습니다~!`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `웹팀에서는 세미나를 통한 개발 지식 공유부터 웹 기술과 관련된 스터디 및 블로깅, 타 플랫폼과 협업하여 진행하는 프로젝트, 서로의 고민과 견해를 나눌 수 있는 테크톡 등 다양한 활동들을 통해 꾸준한 성장을 추구하고 있습니다! 👀 💛🧡`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `네트워킹에도 진심인 웹팀…🥺 다양한 컨퍼런스, 행사 같이 갈 친구도 이제 고민 걱정 NONO~ 🤫🛑 열정적인 사람들과 세상에서 제일 알찬 시간을 보낼 수 있는 기회!
      Web is waiting for Y.O.U.`,
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
      side: 'divide',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `안녕하세요!☠️ (띠리띠리-) Mash-up의 지치지않는 로봇🤖들 안드로이드 팀입니다.🦾🦾`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `13기에 무엇을 할지 궁금하신가요~?~?😜

      다양한 스터디, 모각코, 트렌디한 기술들을 통한 프로젝트 개발, 현업 개발자들과의 세미나까지!! 여러분들과 즐길 많은 활동들을 준비하고 있어요~❤️‍🔥🔥 (12기에는 컴포즈로 개발해 배포까지 성공했답니다 소곤소곤)

      그뿐인가요~

      저희 팀에는 클라이밍, 춤, 기타, 헬스 등 다양한 취미를 가진 숨은 고수들이 많아서 함께 취미를 공유하고 즐기면서 재미있는 추억도 쌓아가실 수 있어요! 😆 물론 여러분들의 취미도 함께 할 수 있구요! 😉`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `기술적으로 풀기 어려운 문제를 공유해 함께 토론하고 해결해보고 싶으신 분💪🏻

      모든 팀 활동에 적극적으로! 열정적으로! 참여할 수 있으신 분🔥

      다양한 취미 활동과 타팀과의 술자리를 통해 친목 도모까지 얻어가고싶으신 분 🧗‍♀️💃

      지금 당장 지원하세요~ 기다릴게요! 🙋`,
    },
    {
      side: 'end',
      commentType: 'emoji',
      comment: '🦾🤖🦿',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'android-1-min.png',
    },
  ],
  [IOS]: [
    {
      side: 'start',
      commentType: 'img',
      comment: 'ios-1-min.gif',
    },
    {
      side: 'start',
      commentType: 'text',
      comment: '우왕',
    },
    {
      side: 'start',
      commentType: 'img',
      comment: 'ios-1-1-min.gif',
    },
    {
      side: 'start',
      commentType: 'text',
      comment: '좌왕',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'ios-2-min.gif',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '어서왕!!!!!!!!!',
    },

    {
      side: 'end',
      commentType: 'text',
      comment: `🍎 맥북, 애플워치, 아이패드 등 애플 제품만보면 흥분하는 앱등이니?

      🍺 다른 사람들과 개발 이야기 하고싶어서 드릉드릉하고 있니?

      🥹 밤새면서 같이 애플 이벤트 볼 친구가 없니?

      🤴 그렇다면 당장 iOS 팀으로 달려왕~~~`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: ` 🏰 iOS팀에서는 열정 넘치는 당신을 기다리고 있다궁 🏰`,
    },
    {
      side: 'end',
      commentType: 'emoji',
      comment: '🍎🥰',
    },
  ],
};
