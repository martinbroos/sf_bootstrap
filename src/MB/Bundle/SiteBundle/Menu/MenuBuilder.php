<?php

namespace MB\Bundle\SiteBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;

/**
 * Build site menu with Knp Menu Builder
 * 
 * @author Martin Broos
 */
class MenuBuilder extends ContainerAware
{
    public function mainMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav');

        $menu->addChild('Home', array('route' => 'homepage'));
        $menu->addChild('Pagina 1');
        $menu->addChild('Pagina 2');
        $menu->addChild('Pagina 3');
/*      
        $menu->addChild('About Me', array(
            'route' => 'page_show',
            'routeParameters' => array('id' => 42)
        ));
*/
        // ... add more children

        return $menu;
    }
}