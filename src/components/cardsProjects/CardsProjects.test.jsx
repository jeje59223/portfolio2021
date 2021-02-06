import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CardsProjects from './CardsProjets';

configure({ adapter: new Adapter() });

describe('<CardsProjects>', () => {
    const firstProject = {
            "id": 1,
            "title": "Games-Catalog",
            "description": "Site qui présente des consoles et des jeux vidéo, avec une partie admin pour la partie gestion des consoles et des jeux. Ce site a été réalisé en NextJS, Bootstrap et du CSS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHAOj4KbzZVRAZtRhdo1hG-DnZJYJ_OW8bw&usqp=CAU",
            "technologies": [
                {
                    "name": "NextJS"
                },
                {
                    "name": "Bootstrap"
                },
                {
                    "name": "CSS"
                }
            ]
        }

    it('should render CardsProjects', () => {
        const wrapper = shallow(<CardsProjects projet={firstProject} />);
        const json = toJson(wrapper);
        expect(json).toMatchSnapshot();
    });
});