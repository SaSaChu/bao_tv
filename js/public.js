/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function() {
  $(".ok_box").click(function(){
    $('.black_boxs').addClass("black_show");
  });

  $(".l_close").click(function(){
    $('.black_boxs').removeClass("black_show");
  });
});
