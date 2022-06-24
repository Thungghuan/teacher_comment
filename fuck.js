const questions = document.querySelectorAll('.form-group')

const choiceWeight = [3, 3, 1, 0, 0]

const totalWeight = choiceWeight.reduce((acc, cur) => acc + cur)

for (const question of questions) {
  const choiceInputRadio = question.querySelectorAll('.radio-inline label')

  const randomNumber = Math.floor(Math.random() * totalWeight)

  let randomRange = 0
  let choice

  for (let i = 0; i <= 4; ++i) {
    randomRange += choiceWeight[i]
    if (randomNumber < randomRange) {
      choice = i
      break
    }
  }

  choiceInputRadio[choice].click()
}

const teacherName = document.querySelector('#jsxm').innerText
const commentSplits = [
  '工作耐心负责',
  '讲解清晰透彻',
  '教学方式新颖',
  '课程安排合理',
  '性格平易近人',
  '耐心解答同学的问题',
  '教学态度严谨',
  '能调动学生的积极性',
  '课堂内容充实',
  '能结合具体实例讲解',
  '对学生因材施教',
  '能注重学法指导',
  '能及时解答学生的困惑',
  '能引导学生思考',
  '知识由浅入深',
  '教学方案设计合理',
  '教学思路清晰',
  '能够让学生分清重难点',
  '拓宽学生知识面',
  '深受学生喜爱',
  '工作经验丰富',
  '学术知识渊博'
]

const comment = []

for (let i = 0; i < 3; i++) {
  const length = commentSplits.length

  const deleteIndex = Math.floor(Math.random() * length)

  comment.push(commentSplits.splice(deleteIndex, 1)[0])
}

document.querySelector('textarea').value = `${teacherName}老师${comment.join(
  '，'
)}。`

// 2022.6.24更新，防止弹出禁止脚本注入的弹窗
$('#btn_xspj_tj').data('enter', true)

document.querySelector('#btn_xspj_tj').click()
