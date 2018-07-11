/**
 * 全部选中方法，对应一个顶层的class:chks,
 * 全选class:chks,子checkbox的class:chk
 * @author Zhao Liubin
 * @date   2016-05-19
 * @param  {[type]}
 * @return {[type]}
 */
module.exports = (function($) {
  if (!$) {
    console.warn('需要jQuery赞助哦');
    return;
  }
  //全选
  $('body').on('change', ' .chks .chk-all', function() {
    $(this).closest('.chks').find('.chk').prop('checked', this.checked);
  }).on('change', '.chks .chk:not(.chk-all)', function() {
    var $chks = $(this).closest('.chks');
    if (!this.checked) {
      $chks.find('.chk-all').prop('checked', false);
      return;
    }
    $chks.find('.chk-all').prop('checked', $chks.find('.chk:not(".chk-all")').length === $chks.find(':checked').length);
  });

  //级连选，即子级选择，父级就选中
  $('body').on('change', ' .chks-rel .chk-all', function() {
    $(this).closest('.chks-rel').find('.chk').prop('checked', this.checked);
  }).on('change', '.chks-rel .chk:not(.chk-all)', function() {
    var $chks = $(this).closest('.chks-rel');
    if (this.checked) {
      $chks.find('.chk-all').prop('checked', true);
      return;
    }
    $chks.find('.chk-all').prop('checked', $chks.find('.chk:not(".chk-all"):checked').length > 0);
  });
})(jQuery);