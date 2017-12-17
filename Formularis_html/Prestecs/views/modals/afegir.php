<!-- Modal AFEGIR Prestec-->
<div class="modal fade" id="afegirPrestecModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <!-- Hedaer -->
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">
          <i class="fa fa-plus" aria-hidden="true"></i> Afegir Prestec
        </h4>
      </div><!-- /.modal-header -->
      <!-- Body -->
      <form id="afegirPrestecForm" action="controllers/insertar.php" method="post">
        <div class="modal-body">
          <?php include_once("afegir-formulari.php"); ?>
        </div><!-- /.modal-body -->
        <!-- Footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Tancar</button>
          <button type="submit" class="btn btn-primary">Afegir</button>
        </div><!-- /.modal-footer -->
      </form>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>
