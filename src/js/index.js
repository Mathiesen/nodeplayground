import '../css/index.css';
import moment from 'moment';
import { DataSet, Graph2d } from 'vis/index-timeline-graph2d';
import 'vis/dist/vis-timeline-graph2d.min.css';

var container = document.getElementById('visualization');
var data = [
    {x: '2017-07-01', y: 23},
    {x: '2017-07-02', y: 18},
    {x: '2017-07-03', y: 19},
    {x: '2017-07-04', y: 20},
    {x: '2017-07-05', y: 21},
    {x: '2017-07-06', y: 20},
    {x: '2017-07-07', y: 21},
    {x: '2017-07-08', y: 19},
    {x: '2017-07-09', y: 21},
    {x: '2017-07-10', y: 19},
    {x: '2017-07-11', y: 21},
    {x: '2017-07-12', y: 19},
    {x: '2017-07-13', y: 19},
    {x: '2017-07-14', y: 19},
    {x: '2017-07-15', y: 22},
    {x: '2017-07-16', y: 21},
    {x: '2017-07-17', y: 20},
    {x: '2017-07-18', y: 20},
    {x: '2017-07-19', y: 21},
    {x: '2017-07-20', y: 22},
    {x: '2017-07-21', y: 20},
    {x: '2017-07-22', y: 21},
    {x: '2017-07-23', y: 18},
    {x: '2017-07-24', y: 17},
    {x: '2017-07-25', y: 19},
    {x: '2017-07-26', y: 23},
    {x: '2017-07-27', y: 19},
    {x: '2017-07-28', y: 21},
    {x: '2017-07-29', y: 22},
    {x: '2017-07-30', y: 23},
    {x: '2017-07-31', y: 22}
];

var dataset = new DataSet(data);
var options = {
    start: '2017-07-01',
    end: '2017-07-31',
    width: '100%'
};
var graph = new Graph2d(container, dataset, {});