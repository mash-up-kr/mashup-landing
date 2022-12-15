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
      comment: `안녕하세요😄 Mash-Up 공식 요정 프로덕트 디자인팀이에요💪`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `mash-up은 👑 프디팀 👑  과 다른 팀으로 구성되어 있다고 할 수 있어용~!!

      🔥최 . 강 . 프 . 디🔥

      저희는 서비스 기획부터 인터페이스, 브랜딩, 프로토타이핑까지 **모든 디자인을 유연하게 설계할 수 있는 금손 팀원으로 구성돼요.**`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `프로덕트 디자인팀은 함께 성장해 나갈 🧚New 요정들을 기다리고 있어요!

      - 디자이너들의 정보 교류 및 프로덕트 관련 세미나에 참여하고 싶다면! 🤝
      - 장기 프로젝트로 완성도있는 디자인 포트폴리오를 쌓아가고 싶다면! 🧳
      - 자신의 아이디어를 실제 서비스로 발전시키는 경험을 하고 싶다면!💡
      - 현업 종사자의 피드백과 꿀팁들을 얻어가고 싶다면!🐝`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `많 . 관 . 부 ❤️ 많 . 지 . 부💙`,
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
      side: 'end',
      commentType: 'img',
      comment: 'spring-1.png',
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
      comment: 'node-1.png',
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
      comment: 'android-1.png',
    },
  ],
  [IOS]: [
    {
      side: 'start',
      commentType: 'img',
      comment: 'ios-1.gif',
      profile: true,
    },
    {
      side: 'start',
      commentType: 'text',
      comment: '우왕좌왕',
      profile: true,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'ios-2.gif',
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
