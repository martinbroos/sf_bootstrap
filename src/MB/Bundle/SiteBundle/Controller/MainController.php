<?php

namespace MB\Bundle\SiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MainController extends Controller
{
    public function indexAction()
    {
        return $this->render('MBSiteBundle:Main:index.html.twig');
    }
}
