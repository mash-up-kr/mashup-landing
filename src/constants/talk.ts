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
      side: 'end',
      commentType: 'text',
      comment: `🎙️치직,,,치지직,,,,
      잘 들리나 오바,,,,`,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'spring1-min.png',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `📢 여긴,,, 메시업 스프링 팀,,,, 스프링 팀이다,,,,
      이,,, 무전을 들었다면,,,, 메시업 스프링 팀으로 오길 바란다,,,,`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '📡 학생부터 현직자까지,,, 모든 이들을 반기는 곳이다,,,,,',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'spring2-min.png',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `📣 온갖 기술이 존재하는 시대,,,, 자연스럽게 기술을 익혀갈 수 있는,,,, 그런 곳,,,,,
        자신이 배운 것을 뽐내보고,,,,, 다른 사람들의 경험으로 부터 배우며,,,, 성장해 나갈 수 있는 곳,,,,`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `🎙️ 그렇다고 일만 하는 곳은 아니다,,,,
      해커톤이 끝나도 더 놀고가는,,,, 새벽까지 파티를 즐기는,,,,
      놀 때도 모든 힘을 다해 열심히 노는 사람들이지,,,,`,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'spring3-min.png',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '📢 그러니깐,,,, 방황하지 말고,,,, 내,,,,도도,,,,,도도독 (동료가 돼라)',
    },
  ],
  [NODE]: [
    {
      side: 'start',
      commentType: 'text',
      comment: '설마 Node 팀 Next Time에 들어오려는건 아니지⁉️⁉️',
      profile: true,
    },
    {
      side: 'divide',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'node1-min.png',
    },
    {
      side: 'start',
      commentType: 'text',
      comment: `Ok...
      Next Time에 들어오면 자리 없다는건 인지하고 있지요?`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '매쉬업 Node팀 PR 요청해서 Approve 받았어요.✅✅',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: `node2-min.png`,
    },
    {
      side: 'start',
      commentType: 'text',
      comment: '얼른 지원안하면 Approve 안해줄꺼에요⁉️⁉️',
    },
    {
      side: 'start',
      commentType: 'img',
      comment: 'node3-min.png',
    },
  ],
  [WEB]: [
    {
      side: 'start',
      commentType: 'text',
      comment: 'Web 팀에 대해서 소개해주세요! 👀',
      profile: true,
    },
    {
      side: 'divide',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'web1-min.jpg',
      profile: true,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '9개.. 10개.. 🏋️‍♂️ 오호! 안녕 어서오렴~😎👋',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '우린 헬띠 건강미🦾 뿜뿜의 슈퍼 로켓🚀팀인 웹팀이야💝',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '우리와 함께 잃어버린 건강도 찾고💪, 내 키 2cm를 빼앗아간 거북목도 피고..💪',
    },
    {
      side: 'end',
      commentType: 'text',
      comment:
        '오래 앉아 있어서 대퇴이두가 많이 타이트 할텐데.. 폼롤링 하면서 Next.js App Router 이야기를 해볼까?',
    },
    {
      side: 'start',
      commentType: 'text',
      comment: '무..무서워요..🥹',
      profile: true,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'web2-min.png',
    },
    {
      side: 'end',
      commentType: 'text',
      comment:
        '앗 미안해!😉 저 친구는 운동에 미쳐있는 쁘론트엔드 개발자라서 내가 대신 이어서 소개할게!🧚‍♂️',
    },
    {
      side: 'end',
      commentType: 'text',
      comment:
        '우리 로켓 웹팀은 성장에 미쳐있는 웹팀원들과 함께 세미나를 통한 개발 지식 공유, 엄청 딥하게 이어지는 테크톡, 웹 기술 관련 스터디 같은 여러 활동들을 진행 할 예정이야! 근성장..이 아닌 기술적 성장을 전적으로 추구하고 있는 팀이지!',
    },
    {
      side: 'end',
      commentType: 'text',
      comment:
        '개발 말고도 같이 한강도 걷고🏃, 클라이밍도 하고🧗! 오래오래 개발하기 위해 건강💖도 같이 챙길 예정이야!',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '만약 너도 웹 개발 열정 뿜뿜!🚀 건강한 삶 뿜뿜!💪 이라면 지금 당장 지원하라구!',
    },
  ],
  [ANDROID]: [
    {
      side: 'end',
      commentType: 'text',
      comment:
        '🚨🚨🚨애애애애애앵‼️‼️‼️🚨🚨🚨📢📢📢긴급상황‼️‼️‼️긴급상황‼️‼️📢📢🔊🔊🔊‼️‼️‼️🔊🔊🔊🔊🔥🔥🔥🔥🛎🛎모두주목해주세요땡땡땡땡땡🛎🛎🛎🎤🎤아아-마이크테스트-!마이크테스트-!🎤🎤🎙🎙마이크테스트— 예비14기들린다면 응답하라—-🎙🎙📣📣 ',
      profile: true,
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'android1-min.jpg',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '안녕하세요🙇🏻‍♀️ 저희는 열정 없이 못사는 안드로이드 팀입니다ㅎㅎ',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `대체 얼마나 열정적인지 궁금하시다구요!? 🔥 

      안드로이드는 최대한 다양한 활동들을 함께하며 알찬 기수를 보냅니다! 다양한 스터디, 새로운 기술을 도전할 수 있는 프로젝트, 안드로이드 팀원들과 기술에 대해 깊이 있게 이야기 할 수 있는 세미나 등 아주 많은 활동들이 준비되어 있답니다!!`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment:
        '저희 안둥이들은 취미 공유 활동 또한 진심인데요!  등산, 배드민턴, 클라이밍, 방탈출 등 다양한 취미를 공유하며 친해지고 소중한 추억까지 만들 수 있답니다🍀🍀',
    },
    {
      side: 'end',
      commentType: 'text',
      comment: `안드에 정말 진심이다!! 열정빼면 시체지!! 이신 분🙌🏻
      14기 안드로이드 팀원들과 딥~하게 스터디 하고 싶으신 분🙌🏻
      무엇보다 적극적으로 소통하고 활발히 참여할 수 있는 분🙌🏻
      안둥이들과 활발한 네트워킹, 소중한 추억 쌓고싶으신 분🙌🏻`,
    },
    {
      side: 'end',
      commentType: 'text',
      comment: '이라면 누구나 지원 가능합니다!  📢 I Say ~ 안드!! You Say ~~ 로이드!! 📢',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'android2-min.png',
    },
    {
      side: 'end',
      commentType: 'img',
      comment: 'android3-min.png',
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
