// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Scala',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'MapReduce',
    competency: 5,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Hadoop',
    competency: 5,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Spark',
    competency: 5,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Amazone Web Services',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Airflow',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Data Engineering', 'Languages'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Pytorch',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Matplotlib + Seaborn',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Natural Language Processing',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Recommendation System',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Information Retrieval',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Research',
    competency: 4,
    category: ['General'],
  },
  {
    title: 'Problem Solving',
    competency: 5,
    category: ['General'],
  },
  {
    title: 'Leadership',
    competency: 5,
    category: ["General"],
  },
  {
    title: 'Project Management',
    competency: 4,
    category: ['General'],
  },
  {
    title: 'Technical Design',
    competency: 4,
    category: ['General'],
  },
  {
    title: 'Statistical Analysis',
    competency: 2,
    category: ['Data Science', 'General'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
